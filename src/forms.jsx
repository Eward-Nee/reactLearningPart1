import React from "react";

function Forms() {
    // When using the onSubmit attr in the forms ellement.
    // function handleSubmit(event) {
    //     // console.log(event)
    //     event.preventDefault() // prevent page reloading after form submit
    //     const formEl = event.currentTarget
    //     const formData = new FormData(formEl)
    //     const Name = formData.get("ame") // name attr of input
    //     formEl.reset()

    //     console.log(Name)
    // }

    function getName(Name) {
        console.log(Name)
    }

    function getPassword(psw) {
        console.log(psw)
    }

    function getData(formData) {
        getName(formData.get("ame"))
        getPassword(formData.get("psw"))
    }

    return (
        <>
            <h3>This is the Form part:</h3><br />

            <form action={getData}/*method="post" // moethod cant be declared when using a function with the action attr // onSubmit={handleSubmit}*/ >
                <label htmlFor="Name">Name:</label><br />
                <input type="text" id="Name" name="ame" placeholder="Juan" />
                <br /><br />
                <label htmlFor="psw">Password:</label><br />
                <input type="password" id="psw" name="psw" placeholder="1234" />
                <br /><br />
                <button>Click me</button>
            </form>
        </>
    )
}

export default Forms
