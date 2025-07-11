import { GoogleGenAI, Type } from "@google/genai";
import TurndownService from "turndown";
import { Product } from "@/components/ProductBox";
const turndownService = new TurndownService();
const ai = new GoogleGenAI({ apiKey: "AIzaSyCbsu22aRgcedVcJ12-KOJAGVp7-I32DV8" });

export async function ask_gemini(query: string): Promise<Product[] | null> {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: query,
        config: {
            systemInstruction: "You are a walmart search agent. Your task is to provide search results for the given query. You are allowed to share products from real walmart's website also. You should output multiple products and their links from real walmart's website. Context: \nUser is in a page with following content so assume the query is related to this context. \n" + turndownService.turndown(document.body.innerHTML),
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        url: { type: Type.STRING },
                        name: { type: Type.STRING },
                        description: { type: Type.STRING },
                        imageUrl: { type: Type.STRING },
                        price: { type: Type.NUMBER },
                    },
                    required: ["url", "name", "description", "imageUrl", "price"]
                }
            }
        }
    });
    if (response.text === undefined) return null;
    const products: Product[] = JSON.parse(response.text)
    console.log(products)
    return products
}
