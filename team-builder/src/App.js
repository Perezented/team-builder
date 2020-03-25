import React, { useState } from "react";
import Form from "./components/Form";
//making of the team
const originalTeam = [
    {
        id: 1,
        name: "Name1",
        email: "email@corp.com",
        role: "Computer Wizard"
    },
    {
        id: 2,
        name: "OtherName",
        email: "emailMe@corp.com",
        role: "KeyBoard Masher"
    }
];
//App displayed here
function App() {
    //useState to set the original team
    const [team, setTeam] = useState(originalTeam);
    //useState for the forms and the changes that will happen
    const [formVals, setFormVals] = useState({
        name: "",
        email: "",
        role: ""
    });
    //Targets
    const inputChange = event => {
        const inputChanged = event.target.name;
        const newVal = event.target.value;
        setFormVals({
            ...formVals,
            [inputChanged]: newVal
        });
    };
    //Form submission
    const onFormSubmit = event => {
        event.preventDefault();
        const newTeamMember = {
            id: Math.random() * 20,
            name: formVals.name,
            email: formVals.email,
            role: formVals.role
        };
        setTeam([...team, newTeamMember]);
    };

    return (
        <div className="App">
            {/* Decided to add the form to the top of the page.  */}
            <h2>Add a team member: </h2>
            <Form
                team={team}
                setTeam={setTeam}
                setFormVals={setFormVals}
                formVals={formVals}
            />
            {/* Have the rest of the team already displayed */}
            <h1>List of people on the team:</h1>
            {team.map(person => (
                <div key={person.id}>
                    <h3>{person.name}</h3>
                    <br />
                    <address>{person.email}</address>
                    <br />
                    <p>{person.role}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
