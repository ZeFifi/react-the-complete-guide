import React from 'react';
import Person from "./Person/Person";

const Persons = (props) => {
    return (
        <div>
            {
                props.people.map((person, id) => {
                    return <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        click={() => props.click(id)}
                        placeholder={person.name}
                        edit={(event) => props.edit(event, person.id)}
                    />
        })
            }
        </div>
    );
};

export default Persons;