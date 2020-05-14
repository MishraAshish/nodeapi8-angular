import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./store";
import App from "./App/app";
//import {GetName as GetName2} from "./App/app2"; //aliasing for same name import

console.log("index file of synergisticit project");

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);