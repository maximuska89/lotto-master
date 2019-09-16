import React from 'react';
import NameInput from "./NameInput";
import SelectedNumbers from "./SelectedNumbers";
import classes from './Tip.module.css'
import SaveEditDeleteButtons from "./SaveEditDeleteButtons";

const Tip = (props) => {
    return (
        <div className={classes.tipContainer}>
            <NameInput value={props.tip.name} isSaved={props.tip.isSaved} index={props.index}
                       onNameChanged={props.onNameChanged}/>
            <label>Numbers</label>
            <SelectedNumbers numbers={props.tip.numbers} isSaved={props.tip.isSaved} index={props.index}
                             onNumberChanged={props.onNumberChanged}/>
            <SaveEditDeleteButtons onDeleteHandler={props.onDeleteHandler}
                                   onSaveHandler={props.onSaveHandler}
                                   onEditHandler={props.onEditHandler}
                                   index={props.index}
                                   tip={props.tip}/>
            <div>

            </div>
        </div>
    )
};

export default Tip;