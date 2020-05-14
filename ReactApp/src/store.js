import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware"; //make aync call to api
import thunk from 'redux-thunk';//make aync call to api

import user from "./App/State/UserReducer";

let myLogger = () => (next) => (action) => {    
    console.log("Logged Action : Store File ", action);
    next(action);
};

export default createStore(
    combineReducers(
    {
        user
    }),
    {},
    applyMiddleware(myLogger,thunk,promise)    
)