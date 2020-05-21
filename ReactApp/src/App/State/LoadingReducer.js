
const INITIAL_STATE = false;

//whenever called reducer will always return a state
export default function loadingReducer(state=INITIAL_STATE, action) {
    //debugger;
    switch (action.type) {
        case "LOADING":
            return {...state, loading:action.payload.loading}
        default:
            return state
    }

}