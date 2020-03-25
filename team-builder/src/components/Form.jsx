import React, { useState } from "react";

function Form(props) {
    console.log(props);
    //Targets
    const inputChange = event => {
        const inputChanged = event.target.name;
        const newVal = event.target.value;
        props.setFormVals({
            ...props.formVals,
            [inputChanged]: newVal
        });
    };
    //Form submission
    const onFormSubmit = event => {
        event.preventDefault();
        const newTeamMember = {
            id: Math.random() * 20,
            name: props.formVals.name,
            email: props.formVals.email,
            role: props.formVals.role
        };
        props.setTeam([...props.team, newTeamMember]);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <label>
                Name:
                <input
                    name="name"
                    type="text"
                    onChange={inputChange}
                    value={props.forVals.name}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    name="email"
                    type="email"
                    onChange={inputChange}
                    value={props.formVals.email}
                />
            </label>
            <br />
            <label>
                Role:
                <input
                    type="text"
                    name="role"
                    onChange={inputChange}
                    value={props.formVals.role}
                />
            </label>
            <br />
            <input type="submit" />
        </form>
    );
}
export default Form;
