import React from 'react';

const Cockpit = (props) => {

    return (
        <div>
            <h1>Hello people!</h1>
            <button onClick={props.toggle}>Make names visible</button>
        </div>
    );
};

export default Cockpit;