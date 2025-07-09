import { GoogleGenAI } from "@google/genai";
let mediaRecorder;
let audioChunks = [];
let audioBlob;
let stream;

export async function initRecorder(onstop) {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            audioChunks = [];
            if (onstop) onstop()
        };

    } catch (err) {
        console.error("Error accessing microphone:", err);
    }
}

export async function startRecording() {
    if (!mediaRecorder || mediaRecorder.state === 'recording') {
        console.log("Recorder not ready or already recording");
    }
    audioChunks = [];
    audioBlob = null;
    mediaRecorder.start();
}

export function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        stream.getTracks().forEach(track => track.stop());
    }
}

export function transcribeAudio() {
    if (!audioBlob) {
        console.error("No audio recorded to transcribe.", audioBlob);
        reject("Recorder not ready");
    }

    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    return new Promise((resolve, reject) => {
        reader.onloadend = async () => {
            const base64data = reader.result.split(',')[1];

            let chatHistory = [];
            chatHistory.push({
                role: "user",
                parts: [
                    {
                        inlineData: {
                            mimeType: audioBlob.type,
                            data: base64data
                        }
                    }
                ]
            });

            const ai = new GoogleGenAI({ apiKey: "AIzaSyCbsu22aRgcedVcJ12-KOJAGVp7-I32DV8" });
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: chatHistory,
                config: {
                    systemInstruction: "Transcribe the audio into english"
                }
            })
            console.log(response)

            resolve(response.text);

        };
        reader.onerror = (error) => {
            console.error("Error converting audio to Base64:", error);
            reject("Transcription failed.");
        };
    })
}
