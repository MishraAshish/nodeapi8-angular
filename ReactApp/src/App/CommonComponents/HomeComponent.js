import React from "react";
import {PropTypes} from "prop-types";

export default class Home extends React.PureComponent{
    //Creation Life Cyle method
    constructor(props, context){
        super(props, context);
        this.state = {
            msg:props.msg,
            counter: 1
        }
        console.log("Constructor called first and only one time when component gets invoked.");

        this.textInput = React.createRef(); //creating ref element : Needs to be avoided in actual use unless necessary
    }

    componentWillMount(){
        //View is not ready and has been removed from raect 16
        console.log("Component LC - componentWillMount");

        //view is not ready below code should remain commented
        //this.textInput.current.focus();
        //this.textInput.current.value = "Setting Up Reference Value";
    }

    componentDidMount(){
        console.log("Component LC - componentDidMount");
        // access the view, make ajax calls (server calls), call setState (update the state)

        //accessing the actual DOM using ref keyword
        // this.textInput.current.focus();
        // this.textInput.current.value = "Setting Up Reference Value";
    }

    //Destruction Life Cyle method
    componentWillUnmount(){
        console.log("Component LC - componentWillUnmount");
        //Clear all timeouts, intervals, any subscriptions, invoked when we move from one component to another
        
    }

    //Update LifeCyle
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps -", nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("shouldComponentUpdate -");
    //     console.log("nextProps -", nextProps );
    //     console.log("nextState -", nextState);
    //     if (nextState.counter == 2 || nextState.counter == 4 || nextState.counter == 6) {
    //         return true;
    //     }else
    //         return false;
    //     //return true;
    // }

    // getSnapshotBeforeUpdate(prevState){
    //     console.log("getSnapshotBeforeUpdate ");
    //     console.log("prevState - ",prevState);
    //     return prevState;
    // }
    
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate -");
        console.log("prevState -", prevState);
        console.log("prevProps -", prevProps);
        // this.setState({
        //     counter: prevState.counter
        // })
    }

    changeMessage = ()=>{
        //alert("Button Clicked")
        this.setState({ // when updated like this render gets called so change gets reflected on UI
            msg: this.state.msg + " 1",
            counter: this.state.counter + 1
        })

        //this.state.msg = this.state.msg + "Force Update"; // when updated like this no render gets called so no change gets reflected on UI
        //this.state.counter = this.state.counter + 1;
        // console.log(this.state.msg);
        //this.forceUpdate(); // calls render method by force, but skips life cycle methods thus violates performance
    }

    render(){
        console.log("Component LC Render - ", this.state.msg);
        return(//React.Fragment Returns one parent element without any additional div or parent
            <div className={"loadimage"} style={{backgroundImage: "url(./images/hm_pic4.jpg)"}}>
                    {/* <img src={"./images/hm_pic4.jpg"} /> */}
                    {this.state.Title}
                    <br/>
                    <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                    <ul>                     
                        <li>Sign up new users</li>
                        <li>Login existing users.</li>
                        <li>Add products/items to user's cart.</li>
                        <li>Save the user's cart.</li>
                        <li>Checkout and pay for items.</li>
                    </ul>
                    <button onClick={()=> (this.props.history.push("/about/51"))}>GoTo About Page</button>
            </div>
            // <React.Fragment> 
            //     <hr/>
            //     <p><b>{this.state.msg}</b></p>

            //     <p><b>{this.props.returnMsg}</b></p>

            //     <p><b>{this.state.counter}</b></p>
            //     <button onClick={this.changeMessage}>Click Me</button>               
                
            //     {/* This is a way to send data back to parent using a call back function */}
            //     <button onClick={()=> this.props.sendToChild(this.state.msg)}>Send Back Data To Parent</button>               
                
            //     {/* this is ref element to be accessed directly in code */}
            //     <input type="text" ref={this.textInput} value="learning ref in react"/>
            // </React.Fragment>
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
