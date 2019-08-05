import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Hi, my name is {props.name} and I'm {props.age}.</p>
            <input type="text" onChange={props.edit} placeholder={props.name}/>
        </div>
    );
};

export default Person;