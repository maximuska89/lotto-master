import {actionTypes} from './actions'

export const initialState = {
    tips: [],
    lottoNumbers: [],
};

const appReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TIP:
            return {
                ...state,
                tips: [...state.tips, {name: '', numbers: new Array(6).fill(null), isSaved: false}]
            };
        case actionTypes.SET_IS_SAVED:
            const oldTipIndex = action.index;
            const newElement = {
                ...state.tips[oldTipIndex],
                isSaved: action.isSaved,
            };
            return {
                ...state,
                tips: Object.assign([], state.tips, {[oldTipIndex]: newElement})
            };
        case actionTypes.REMOVE_TIP:
            return {
                ...state,
                tips: [
                    ...state.tips.slice(0, action.index),
                    ...state.tips.slice(action.index + 1),
                ]
            };
        case actionTypes.NUMBER_INPUT_CHANGED:
            const oldNumbersIndex = action.index;
            const numbers = state.tips[oldNumbersIndex].numbers;
            const newValue = action.number ? +action.number : action.number;
            const newElementWithNewNumbers = {
                ...state.tips[oldNumbersIndex],
                numbers: Object.assign([], numbers, {[action.numberIndex]: newValue})
            };
            return {
                ...state,
                tips: [
                    ...state.tips.slice(0, oldNumbersIndex),
                    newElementWithNewNumbers,
                    ...state.tips.slice(oldNumbersIndex + 1),
                ]
            };
        case actionTypes.NAME_INPUT_CHANGED:
            const oldNameIndex = action.index;
            const newElementWithNewName = {
                ...state.tips[oldNameIndex],
                name: action.name,
            };
            return {
                ...state,
                tips: [
                    ...state.tips.slice(0, oldNameIndex),
                    newElementWithNewName,
                    ...state.tips.slice(oldNameIndex + 1),
                ]
            };
        case actionTypes.SET_NUMBERS:
            return {
                ...state,
                lottoNumbers: action.numbers
            }
    }
    return state;

}
export default appReducer;