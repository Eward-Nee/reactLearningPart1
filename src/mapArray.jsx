import React, { useState } from "react";

function Map() {

    const arr = ["apple", "pear", "banana"]
    const [list, setList] = useState([])

    function listFruit() {
        setList(
            arr.map((fruit) => (
                <><li>{fruit}</li></>
            ))
        )

        console.log(list)
    }



    return (
        <>
            <button onClick={listFruit}>List Fruits</button>
            {list}
        </>
    )
}

export default Map