import React, { useEffect, useRef, useState } from "react";

function UseRef() {

    const toDiv = useRef(null)
    const [clicked, setClicked] = useState(false)

    function doCode() {
        setClicked(prev => !prev)
    }

    useEffect(() => {
        if (toDiv !== null && clicked === true) {
            toDiv.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [clicked])

    return (
        <>

            <button onClick={doCode}>{clicked ? "true, button is clicked" : "false, button is either not clicked or unclicked"}</button>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vel quia earum beatae ipsum culpa cum perspiciatis velit exercitationem, aperiam inventore quasi, quidem accusamus perferendis, soluta quae incidunt delectus esse!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vel quia earum beatae ipsum culpa cum perspiciatis velit exercitationem, aperiam inventore quasi, quidem accusamus perferendis, soluta quae incidunt delectus esse!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vel quia earum beatae ipsum culpa cum perspiciatis velit exercitationem, aperiam inventore quasi, quidem accusamus perferendis, soluta quae incidunt delectus esse!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vel quia earum beatae ipsum culpa cum perspiciatis velit exercitationem, aperiam inventore quasi, quidem accusamus perferendis, soluta quae incidunt delectus esse!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vel quia earum beatae ipsum culpa cum perspiciatis velit exercitationem, aperiam inventore quasi, quidem accusamus perferendis, soluta quae incidunt delectus esse!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vel quia earum beatae ipsum culpa cum perspiciatis velit exercitationem, aperiam inventore quasi, quidem accusamus perferendis, soluta quae incidunt delectus esse!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vel quia earum beatae ipsum culpa cum perspiciatis velit exercitationem, aperiam inventore quasi, quidem accusamus perferendis, soluta quae incidunt delectus esse!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vel quia earum beatae ipsum culpa cum perspiciatis velit exercitationem, aperiam inventore quasi, quidem accusamus perferendis, soluta quae incidunt delectus esse!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vel quia earum beatae ipsum culpa cum perspiciatis velit exercitationem, aperiam inventore quasi, quidem accusamus perferendis, soluta quae incidunt delectus esse!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vel quia earum beatae ipsum culpa cum perspiciatis velit exercitationem, aperiam inventore quasi, quidem accusamus perferendis, soluta quae incidunt delectus esse!</p>
            <div
                ref={toDiv}
            >
                Div with useRef
            </div>
        </>
    )
}

export default UseRef