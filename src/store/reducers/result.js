import * as actionTypes from '../actions/actionTypes';

const initialState = {
    result: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({ id: Date.now(), value: action.payload.result })
                // or ↓
                // result: [...state.result, { id: new Date(), value: state.counter }]
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            // or ↓

            // const updatedArray = state.result.filter((e) => true) // created Copy of the array
            const updatedArray = state.result.filter(e => e.id !== action.payload.id);
            return {
                ...state,
                result: updatedArray
            }
    }
    return state;
}

export default resultReducer
