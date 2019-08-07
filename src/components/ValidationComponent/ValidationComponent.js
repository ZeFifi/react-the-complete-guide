import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div>
            {props.charLength <= 5 ? "Text too short" : "Text long enough"}
        </div>
    );
};

export default ValidationComponent;