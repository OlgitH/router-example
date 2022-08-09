import People from '../../people';
import { useState } from "react";

function Team() {

    const initialState = [
        {personName: 'Joe Bloggs', email: 'j.bloggs@gmail.com', company_roles: [] },
        {personName: 'Sarah Jones', email: 's.jones@gmail.com', company_roles: [] },
        {personName: 'Lucy Robinson', email: 'l.robinson@hotmail.com', company_roles: []}
    ]

    const [people, setPeople] = useState(initialState);
    

    return (
        <div>
            <People people={people} setPeople={setPeople}/>
        </div>
    )
}
export default Team;