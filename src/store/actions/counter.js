import * as actionTypes from './actionTypes';
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

export const addition = (payload) => {
    return {
        type: actionTypes.ADDITION,
        payload: payload
    }
};

export const subtraction = (payload) => {
    return {
        type: actionTypes.SUBTRACTION,
        payload: payload
    }
};
