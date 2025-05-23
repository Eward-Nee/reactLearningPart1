import React, { createContext, useContext, useState } from "react";
import Consumer from "./consumer";

export const externalVar = createContext()

function Provider() {

    const [name, setName] = useState("Eward")

    return (
        <>
            <h3>the variable "{name}" will be shown in the consumer component</h3>
            <externalVar.Provider value={name}>
                <Consumer name={name} />
            </externalVar.Provider>

        </>

    )
}

export default Provider