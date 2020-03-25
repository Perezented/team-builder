import React, { useState } from "react";
import Form from "./components/Form";
import styled from "styled-components";
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
//some styling
const Boxed = styled.div`
    border: 5px ridge lightblue;
    padding: 1% 3%;
    margin: 0 3%;
`;
const Grided = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7% 0%;
`;
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

    return (
        <div className="App">
            {/* Decided to add the form to the top of the page.  */}
            <h2>Add a team member: </h2>
            <div>{/* empty div */}</div>
            <Form
                team={team}
                setTeam={setTeam}
                setFormVals={setFormVals}
                formVals={formVals}
            />
            {/* Have the rest of the team already displayed */}
            <h1>List of people on the team:</h1>
            <Grided>
                {" "}
                {team.map(person => (
                    <Boxed key={person.id}>
                        <h3>{person.name}</h3>
                        <br />
                        <address>{person.email}</address>
                        <br />
                        <p>{person.role}</p>
                    </Boxed>
                ))}
            </Grided>
        </div>
    );
}

export default App;
