import * as ActionTypes from "./ActionTypes"; //alias import
//we have two things in every reducer(state)
//initialize the state
//update the state per dispatched action (generates new state)

const INITIAL_STATE ={
    user: {
        userName: "",
        password: "",
        street: "",
        mobile: "",
        _id:""
    },
    //loading: false
}

//whenever called reducer will always return a state
export default function userReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.AddUserToStore:
            console.log("User PayLoad", action.payload.user);
                //below code is maintaining the immutability of state using spread operator
                //...state = {user:user,laoding:loading}
                //{loading:loading} && user = action.payload.user (new user object gets created)
                
                //{loading:loading} + {user:user} = {loading:loading, user:user} - a new state object is returned

                //it will pluck user obeject and update that with payload.user value
                //then a complete new state would be returned from user reducer
                return {...state, user: action.payload.user}
        default:
            return state
    }

}