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
    render(){
        console.log(this.state.msg);
        return(//React.Fragment Returns one parent element without any additional div or parent
            <React.Fragment> 
                <hr/>
                <p><b>{this.state.msg}</b></p>

                {this.props.children.length >= 1 ? this.props.children[0] : "No Data To Render"}
                
                {this.props.children.length == 2 ? this.props.children[1] : "No Data From Body Component"}
                
            </React.Fragment>
        )
    }
}

Home.propTypes = {
    msg: PropTypes.string.isRequired
}

// Home.defaultProps = {
//     msg: "No Message so defaulting props"
// }