import React from 'react';

const CharComponent = (props) => {
    const style = {
        display: "inline-block",
        padding: 16,
        textAlign: "center",
        margin: 16,
        border: 1 + "px solid black"
    };

    return (
        <div onClick={props.click} style={style}>
            {props.character}
        </div>
    );
};

export default CharComponent;