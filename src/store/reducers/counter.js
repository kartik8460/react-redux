import * as actionTypes from '../actions/actionTypes';
const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADDITION:
            return {
                ...state,
                counter: state.counter + action.payload.val
            }
        case actionTypes.SUBTRACTION:
            return {
                ...state,
                counter: state.counter - action.payload.val
            }
    }
    return state;
}

export default counterReducer