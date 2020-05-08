import React from "react";
import {PropTypes} from "prop-types";

export default class Home extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            msg:props.msg
        }
    //console.log("Home Props :", props);
    }

    changeMessage = ()=>{
        //alert("Button Clicked")
        this.setState({ // when updated like this render gets called so change gets reflected on UI
            msg: this.state.msg + " 1"
        })

        //this.state.msg = this.state.msg + 1; // when updated like this no render gets called so no change gets reflected on UI
        // console.log(this.state.msg);
        //this.forceUpdate(); // calls render method by force, but skips life cycle methods thus violates performance
    }

    render(){
        console.log("Render - ", this.state.msg);
        return(//React.Fragment Returns one parent element without any additional div or parent
            <React.Fragment> 
                <hr/>
                <p><b>{this.state.msg}</b></p>

                <button onClick={this.changeMessage}>Click Me</button>               
                
                <button onClick={()=> this.props.sendToChild(this.state.msg)}>Send Back Data To Parent</button>               
                {/* This is a way to send data back to parent using a call back function */}
            </React.Fragment>
        )
    }
}

// Home.propTypes = {
//     msg: PropTypes.string.isRequired
// }

Home.defaultProps = {
    msg: "No Message so defaulting props"
}


// 1. Pass : Name and Age from state of app and recieve the same in Home Component,
// 	Also make use of propTypes and defaultProps in home component
	
// 2. Create a age in App Component, pass that as props in Home component
// 3. Make use of age coming as props and create a new state 
// 4. Create a function to increment the age
// 5. Attach incrementAge function to a new button
// 6. Also need to show this age on screen
// 7. Create another button which sends updated age back to App component with a callBack
