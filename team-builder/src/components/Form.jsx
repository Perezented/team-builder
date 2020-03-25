import React, { useState } from "react";

function Form(props) {
    console.log(props);
    return (
        <form>
            <label>
                Name:
                <input name="name" type="text" />
            </label>
            <br />
            <label>
                Email:
                <input name="email" type="email" />
            </label>
            <br />
            <label>
                Role:
                <input type="text" name="role" />
            </label>
            <br />
            <input type="submit" />
        </form>
    );
}
export default Form;
