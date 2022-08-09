import People from '../../people';
import { useState } from "react";

function Team() {

    const initialState = [
        {personName: 'Joe Bloggs', email: 'j.bloggs@gmail.com'},
        {personName: 'Sarah Jones', email: 's.jones@gmail.com'},
        {personName: 'Lucy Robinson', email: 'l.robinson@hotmail.com'}
    ]

    const [people, setPeople] = useState(initialState);
    

    return (
        <div>
            <People people={people} setPeople={setPeople}/>
        </div>
    )
}
export default Team;