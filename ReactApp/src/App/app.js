import React        from "react";
import {Component, useState }  from "react";
import Header, * as all from "./CommonComponents/HeaderComponent";
import Footer from "./CommonComponents/FooterComponent";
import Home from "./CommonComponents/HomeComponent";

//export default class App extends Component{
export default class App extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {//initialized the state //comes from props or created here and mutable
            homeMsg:"1. This is Applications Home Component",
            footerMsg:"Thanks Your For Shopping",
            year:2020,
            childMsg: "No Message"
        },
        this.title = "Shopping Cart Header";//Global variable/ expression
    }

    getDataFromChild =(childMsg ) => {
        //alert(childMsg);
        this.setState({
            childMsg:childMsg
        })
    }

    render(){//virtual dom
        return(//JSX
            <div>
                <Header title={this.title}/>
                <Home msg={this.state.homeMsg} sendToChild={this.getDataFromChild} returnMsg={this.state.childMsg}>
                    <p>{"2. Home Component Data"}</p>
                    <all.GetBody />
                </Home>
                <Footer msg={this.state.footerMsg} year={this.state.year}/>               
            </div>
        )
    }
}


// export default class App_Old extends React.Component{
//     //export default class App extends Component{
//         render(){//virtual dom
//             let a = 25, b = 26, framework = "React", version = "16.4";
//             let title = `We are going to learn ${framework} Framework with version ${version}`;
//             let names = ["Andrew","Himavan","Richard","Linh"];
//             return(//JSX
//                 <div>
//                     <b>This should load from react page</b>
//                     <p>{'Addition '+ a + b}{'Multi - '+ a * b}</p>
//                     <div>
//                         <b>{title}</b>
//                         <ul>{
//                             names.map((item)=>{
//                                 return <li>{item}</li>;
//                             })
//                         }</ul>
//                     </div>
//                     <Header>
//                         <all.GetName />    
//                         <all.GetAge />
//                     </Header>
                    
                    
//                 </div>
//             )
//         }
//     }