/**** SINGLE REDUCER FILE ****/


// import * as actionTypes from './actions';
// const initialState = {
//     counter: 0,
//     result: []
// }

// const reducer = (state = initialState, aciton) => {
//     switch (aciton.type) {
//         case actionTypes.INCREMENT:
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         case actionTypes.DECREMENT:
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         case actionTypes.ADDITION:
//             return {
//                 ...state,
//                 counter: state.counter + aciton.payload.val
//             }
//         case actionTypes.SUBTRACTION:
//             return {
//                 ...state,
//                 counter: state.counter - aciton.payload.val
//             }
//         case actionTypes.STORE_RESULT:
//             return {
//                 ...state,
//                 result: state.result.concat({ id: Date.now(), value: state.counter })
//                 // or ↓
//                 // result: [...state.result, { id: new Date(), value: state.counter }]
//             }
//         case actionTypes.DELETE_RESULT:
//             // const id = 2;
//             // const newArray = [...state.results];
//             // newArray.splice(id, 1);

//             // or ↓

//             // const updatedArray = state.result.filter((e) => true) // created Copy of the array
//             const updatedArray = state.result.filter(e => e.id !== aciton.id);
//             return {
//                 ...state,
//                 result: updatedArray
//             }
//     }
//     return state;
// }

// export default reducer
