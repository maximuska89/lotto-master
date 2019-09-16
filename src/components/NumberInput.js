import React from 'react';
import classes from './NumberInput.module.css'

const NumberInput = (props) => {
    const numberInputChangeHandler = (e) => {
        props.onNumberChanged(props.index, props.numberIndex, e.currentTarget.value)
    };
    return (
        <>
            <input disabled={props.isSaved} className={classes.numberInputWidth} value={props.value}
                   onChange={numberInputChangeHandler}
                   type="number"/>
        </>
    )
};

export default NumberInput;