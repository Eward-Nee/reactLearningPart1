import React, { useEffect, useState } from "react";
import API_KEY from "../src/CarAPI"

function Cars() {

    const [carData, setCarData] = useState({})
    const [carModel, setcarModel] = useState("Audi")

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(`https://api.api-ninjas.com/v1/cars?model=${carModel}`, {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': API_KEY
                    }
                })
                    .then(res => res.json())
                    .then(data => setCarData(data))
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [carModel])

    function handleClick(formData) {
        setcarModel(formData.get("carModel"))
    }

    return (
        <>

            <form action={handleClick}>
                <label htmlFor="carModel">Car Model:</label>
                <input type="text" id="carModel" name="carModel" />
                <button>Get info about the car</button>
            </form>

            <pre>
                {JSON.stringify(carData, null, 2)}
            </pre>
        </>
    )
}

export default Cars