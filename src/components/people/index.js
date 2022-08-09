import { useState, useEffect } from "react";

function People(props) {
    

    // Accepts the people prop, which is an array of people
    const { people, setPeople } = props;
    
    const [ personName, setPersonName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [errorMessage, setErrorMessage ] = useState(null);

    const companyRoles = ["Manager", "Admin", "Contributor"];
    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const addPerson = () => {
        setPeople([
            ...people,
            {
                'personName': personName,
                'email': email,
                'company_roles': checked
            }
        ])
    }

    useEffect(() => {
        console.log('Component mounted');
    }, [])



    useEffect(() => {
        console.log(checked);
    }, [checked])


    const submitHandler = (e) => {
        e.preventDefault();

        console.log(checked);

        function validateInputs() {
            var regex = /^([^0-9]*)$/;
            if (regex.test(personName)) {
                addPerson();
                setErrorMessage(null)
            } else {
                setErrorMessage('Only letters!')
                // return false;
            }
        }
        validateInputs();
    }
    
    return (
        <>
            <form onSubmit={submitHandler} >
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={personName} onChange={(e) => setPersonName(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                </div>
                <div>
                    {companyRoles.map((item, index) => (
                        <div key={index}>
                            <input value={item} type="checkbox" onChange={handleCheck}/>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
                {/* button is type submit so it will trigger the submit event */}
                <button type="submit">Add person</button>
                {errorMessage && <p>{errorMessage}</p>}

            </form>

            <div className="people-grid">
                {people.map((person, i) => {
                    return (
                        <div key={`person-${i}`}> 
                            <p>{person.personName}</p>
                            <p>{person.email}</p>
                            {person.company_roles.toString()}
                        </div>
                    )
                })}
            </div>
        </>
        
    )
}
export default People;