import * as ActionTypes from "./ActionTypes"; //alias import

export const addUserToStore = (user) => ({        
    type: ActionTypes.AddUserToStore,
    payload: {user}
})

//ajax: asynchronous javascript and xml
export const signInUpUser = (userObject) => {
    console.log('entering signin signup user');
    debugger;
    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call
        // thunk shall call
        console.log("called by thunk");
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/signInUpUser",//uri
            {
                method: 'POST', //rest method type 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObject)
            })//req.body.firstname,req.body.password...
        .then (response => response.json())
        .then (userresp => {
            console.log("response ", userresp);
            let action = addUserToStore(userresp);
            dispatch(action);
            //dispatch(loading(false));
            //dispatch(getCartItems(userresp._id))
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
}