import { stopRecording, startRecording, initRecorder, transcribeAudio } from './autdioRecorder.js'
function createWaitingBox() {
    let waitingBox = document.createElement("div");
    waitingBox.className = "box bot waiting";
    waitingBox.style.display = "flex";
    for (let i = 0; i < 3; i++) {
        let dot = document.createElement("div");
        dot.className = "dot";
        dot.textContent = ".";
        waitingBox.appendChild(dot);
    }
    return waitingBox
}
export let AI, Bot;
fetch("https://chatbot.vinaiak.com/chatbot/frontend/inject.js").then(
    (response) => {
        response.text().then((data) => {
            let Bot1, AI1;
            data = data + ";Bot1 = Bot;AI1 = AI";
            eval(data);
            AI = AI1;
            Bot = Bot1;
        });
    },
);

export function addBot(targetElement, cb) {
    let frameNotOpened = false;
    targetElement = targetElement || document.body;

    {
        const styles = document.createElement("link");
        styles.rel = "stylesheet";
        styles.href =
            "https://chatbot.vinaiak.com/clients/BIT_Mesra/site/styles.css";
        document.head.appendChild(styles);
    }
    const loginIcon = document.createElement("div");
    loginIcon.id = "bot-loginIcon";
    loginIcon.innerHTML =
        '<img src="https://chatbot.vinaiak.com/clients/SBPS_Ranchi/site/resources/icon.gif" alt="AI assistants"></img>';
    targetElement.appendChild(loginIcon);

    loginIcon.onclick = () => {
        if (Bot.exists) {
            setTimeout(() => {
                Bot.openFrame();
                setTimeout(() => {
                    document.getElementById("bot-loginIcon").style.display = "none";
                }, 400);
            }, 600);
            return;
        } else {
            setTimeout(() => {
                document.getElementById("bot-loginIcon").style.display = "none";
                if (!Bot.loaded) frameNotOpened = true;
                else Bot.openFrame();
            }, 1000);
        }
        new Bot(
            1,
            null,
            "Ask me about the product",
            "Walmart AI assistant",
            "https://t3.ftcdn.net/jpg/04/06/91/94/240_F_406919447_kAcC5gdh1rpYlVxwMfHtUTGf24PUYSq8.jpg",
            null,
            (iframe) => {
                if (frameNotOpened) Bot.openFrame();
                Bot.createBox("How may I assist you?", 'bot')
                Bot.stopWaiting()
                const record = document.createElement('div')
                record.id = 'quick-access'
                record.innerHTML = '<img src="/microphone.svg" style="height:3dvh;width:3">'
                let recording = false;
                initRecorder(async () => {
                    record.textContent = ''
                    record.appendChild(createWaitingBox())
                    const text = await transcribeAudio();
                    Bot.createBox(text, 'user')
                    record.innerHTML = '<img src="/microphone.svg" style="height:3dvh;width:3dvh">'
                    const output = Bot.createBox('', 'bot')
                    Bot.startWaiting()
                    await AI.answer(text, output)
                    Bot.stopWaiting()
                })
                iframe.querySelector(".credit").innerHTML = '';
                record.addEventListener('click', async () => {
                    if (recording) {
                        stopRecording()
                    }
                    else {
                        record.innerHTML = '<img src="/pause.svg" style="height:3dvh;width:3dvh">'
                        await startRecording()
                    }
                    recording = !recording
                })
                iframe.querySelector('main').appendChild(record)
            },
            targetElement,
        );
        console.log("Logged in to chat bot");
        if (cb) cb()
    };
}
