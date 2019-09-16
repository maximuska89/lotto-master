import React from 'react';
import appReducer, {initialState} from "./store/reducer";
import {actionTypes} from "./store/actions";
import Tip from "./components/Tip";
import LottoNumbers from "./components/LottoNumbers";
import classes from './App.module.css'

const App = () => {
    const [state, dispatch] = React.useReducer(appReducer, initialState);
    const onAddClickHandler = () => {
        dispatch({type: actionTypes.ADD_TIP});
    };
    const onNameInputChanged = (index, name) => {
        dispatch({type: actionTypes.NAME_INPUT_CHANGED, name, index})
    };

    const onNumberInputChanged = (index, numberIndex, number) => {
        dispatch({type: actionTypes.NUMBER_INPUT_CHANGED, number, index, numberIndex})
    };

    const onDeleteHandler = (index) => {
        dispatch({type: actionTypes.REMOVE_TIP, index});
    };

    const onSaveHandler = (index) => {
        dispatch({type: actionTypes.SET_IS_SAVED, isSaved: true, index});
    };

    const onEditHandler = (index) => {
        dispatch({type: actionTypes.SET_IS_SAVED, isSaved: false, index});
    };
    const onSetNumbers = (numbers) => {
        dispatch({type: actionTypes.SET_NUMBERS, numbers});
    };

    const validTips = state.tips.filter(tip => tip.isSaved);
    const tips = state.tips.map((tip, index) => {
        let intersection = [];
        if (state.lottoNumbers.length === 6 && validTips.length <= 5) {
            intersection = state.lottoNumbers.filter(x => tip.numbers.includes(x));
        }
        return <div className={classes.tipContainer}>
            <Tip key={index} index={index} tip={tip}
                 onNumberChanged={onNumberInputChanged}
                 onDeleteHandler={onDeleteHandler}
                 onSaveHandler={onSaveHandler}
                 onEditHandler={onEditHandler}
                 onNameChanged={onNameInputChanged}/>
            {state.lottoNumbers.length === 6 && validTips.length >= 5 ?
                <span>{`${intersection.length}/6 találat`} </span> : null}
            {intersection.length >= 3 && validTips.length >= 5 ? <span>Nyert</span> : null}
        </div>
    });


    return (
        <>
            <div>
                <button onClick={onAddClickHandler}>Add</button>
            </div>
            <div>
                {tips}
            </div>
            {validTips.length >= 5 ? <LottoNumbers setNumbers={onSetNumbers} lottoNumbers={state.lottoNumbers}/> : null}
        </>
    );
};

export default App;
