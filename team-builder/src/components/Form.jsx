import React from "react";

function Form() {
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
