import React, { useContext, useState } from "react";
import { externalVar } from "./provider";
import "./useContext.css"

function Consumer() {
    const user = useContext(externalVar)
    return (
        <>
            <button className="bd">{user}</button >
        </>
    )
}

export default Consumer