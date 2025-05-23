import React from "react"
import { useState } from "react"
import { getRecipe } from "./Ai"
import ReactMarkdown from "react-markdown"


function ClaudeCheff() {

    const [arrList, setList] = useState([])
    const [sResipe, setResepe] = useState("")

    function getData(formData) {
        GetInge(formData.get("inge"))
    }

    function GetInge(inge) {
        console.log(inge)
        setList(oldList => [...oldList, inge])

    }

    async function renderAI() {
        const recipe = await getRecipe(arrList)
        setResepe(recipe)
    }

    return (
        <>
            <br />

            <form action={getData}/*method="post" // moethod cant be declared when using a function with the action attr // onSubmit={handleSubmit}*/ >
                <label htmlFor="ing">My ingrediant:</label>
                <input type="text" id="ing" name="inge" placeholder="Apple" />
                <br />
                <button>submit the ingrediant</button>
            </form>

            <br /><br />

            <h4>My List:</h4>
            <ul>
                {arrList.map(item => (<li>{item}</li>))}
                {console.log(arrList)}
            </ul>

            <button onClick={renderAI}>Get My Recipe</button>


            <ReactMarkdown>
                {sResipe}
            </ReactMarkdown>

        </>
    )
}

export default ClaudeCheff