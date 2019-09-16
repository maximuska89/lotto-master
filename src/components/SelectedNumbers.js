import React from 'react';
import NumberInput from "./NumberInput";

const SelectedNumbers = (props) => {
    const numbers = props.numbers || new Array(6).fill(null);
    const numberInputs = numbers.map((number, index) =>
        <NumberInput key={index}  onNumberChanged={props.onNumberChanged}
                     index={props.index} numberIndex={index} isSaved={props.isSaved}
                     value={number}/>);
    return (
        numberInputs
    )
};

export default SelectedNumbers;
