import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>Hi, my name is {props.name} and I'm {props.age}.</p>
        </div>
    );
};

export default Person;