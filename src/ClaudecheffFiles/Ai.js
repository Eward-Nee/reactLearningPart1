import { InferenceClient } from "@huggingface/inference";
import { AI_KEY } from "./Tk.JS";
// import DOMPurify from 'dompurify'

const SYSTEM_PROMPT = `
You are a professional chef. You will get a list of ingrediants, then you must give me a list of atleast 4 resipies. 
Give your awnser in Markup to make it easy to render on a web page.
`

const hf = new InferenceClient(AI_KEY)

export async function getRecipe(arrIngredients) {
    const sIngrediants = arrIngredients.join(", ")

    try {
        const response = await hf.chatCompletion({
            model: "meta-llama/Llama-4-Scout-17B-16E-Instruct",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${sIngrediants}. Please give me a recipe you'd recommend I make.` }
            ],
            max_tokens: 1024,
        })
        // return DOMPurify.sanitize(response.choices[0].message.content)
        return response.choices[0].message.content
    } catch (error) {
        console.error(error.message)
    }
}