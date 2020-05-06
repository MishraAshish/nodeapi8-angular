import React        from "react";
import {Component, useState }  from "react";
import Header,{GetName} from "./CommonComponents/HeaderComponent";

//export class App extends React.Component{
export default class App extends Component{
    render(){//virtual dom
        let a = 25, b = 26, framework = "React", version = "16.4";
        let title = `We are going to learn ${framework} Framework with version ${version}`;
        return(//JSX
            <div>
                <b>This should load from react page</b>
                <p>{'Addition '+ a + b}{'Multi - '+ a * b}</p>
                <div>
                    <b>{title}</b>
                </div>
                <Header />
                <GetName />
            </div>
        )
    }
}

