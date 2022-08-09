import { useState } from "react";

function People(props) {
    

    // Accepts the people prop, which is an array of people
    const { people, setPeople } = props;

    const [ personName, setPersonName ] = useState('');
    const [ email, setEmail ] = useState('');


    const addPerson = () => {
        setPeople([
            ...people,
            {
                'personName': personName,
                'email': email
            }
        ])
    }




    const submitHandler = (e) => {
        e.preventDefault();
        addPerson();
    }


    return (
        <>
            <form onSubmit={submitHandler} >
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={personName} onChange={(e) => setPersonName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                {/* button is type submit so it will trigger the submit event */}
                <button type="submit">Add person</button>


               
            </form>
            <div className="people-grid">
                {people.map((person, i) => {
                    return (
                        <div key={`person-${i}`}> 
                            {person.personName} 
                            {person.email} 
                        </div>
                    )
                })}
            </div>
        </>
        
    )
}
export default People;