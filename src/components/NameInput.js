import React from 'react';

const NameInput = (props) => {
    const nameInputChangeHandler = (e) => {
        props.onNameChanged(props.index, e.currentTarget.value);
    };
    return (
        <>
            <label>Name</label>
            <input value={props.value} disabled={props.isSaved} onChange={nameInputChangeHandler} type="text"/>
        </>
    )
};

export default NameInput;
