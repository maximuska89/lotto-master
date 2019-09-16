import React from 'react';

const SaveEditDeleteButtons = (props) => {
    const onDeleteClickHandler = () => {
        props.onDeleteHandler(props.index)
    };

    const onSaveHandler = () => {
        props.onSaveHandler(props.index);
    };

    const onEditHandler = () => {
        props.onEditHandler(props.index)
    };

    const {isSaved} = props.tip;
    const mySet = new Set(props.tip.numbers);
    const valid = props.tip.name && props.tip.numbers.every((number) => {
        return number > 0 && number < 46
    }) && mySet.size === 6;

    return (
        <>
            {isSaved
                ? <button onClick={onEditHandler}>Edit</button>
                : <button onClick={onSaveHandler} disabled={!valid}>Save</button>}
            <button onClick={onDeleteClickHandler}>Delete</button>
            {valid ? null : <span>Érvénytelen kitöltés!</span>}
        </>
    )
};

export default SaveEditDeleteButtons;