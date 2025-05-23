import React from "react";

function Hooks() {

    const [names, setNames] = React.useState(["Eward", "Juan"])


    function addName(Data) {
        setNames(prev => [...prev, Data.get("name")]);
    }


    const [list, setList] = React.useState()

    function showList() {
        setList(
            names.map((name) => (
                <li>{name}</li>
            ))
        )
        console.log(names)
    }


    return (
        <>
            <h3>Hooks with Forms</h3>

            <form action={addName}>
                <label htmlFor="Name"></label>
                <input type="text" name="name" id="Name" placeholder="Koos" />
                <br />
                <button>Submit</button>

            </form>

            <h4>array list:</h4>
            <button onClick={showList}>Show list of names</button>
            {list}
        </>
    )
}

export default Hooks