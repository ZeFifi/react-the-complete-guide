import React from 'react';

import "./Person.css";

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Hi, my name is {props.name} and I'm {props.age}.</p>
            <input type="text" onChange={props.edit} placeholder={props.name}/>
        </div>
    );
};

export default Person;