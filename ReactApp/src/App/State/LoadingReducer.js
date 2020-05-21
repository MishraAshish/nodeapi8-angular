import * as ActionTypes from "./ActionTypes"; //alias import
//we have two things in every reducer(state)
//initialize the state
//update the state per dispatched action (generates new state)

const INITIAL_STATE = false;

//whenever called reducer will always return a state
export default function loadingReducer(state=INITIAL_STATE, action) {
    debugger;
    switch (action.type) {
        case "LOADING":
            return {...state, loading:action.payload.loading}
        default:
            return state
    }

}