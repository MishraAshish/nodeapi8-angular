import React, {useState, useReducer} from "react";
import {connect} from "react-redux";
import {addUserToStore} from "../State/Actions";
//https://serverless-stack.com/chapters/create-a-custom-react-hook-to-handle-form-fields.html
//hooks in react to use state in functional component
const FunctionState = (props) => {
    // constructor(){
    //     this.state ={
    //         coupon:56565
    //     }
    // }
    // setCoupon = ()=>{
    //     this.setState({
    //         coupon:56566  
    //     })
    // }
    let initialState = { userName: 'Cool' };
    let [defaultState, dispatch] = useReducer(props.addUser, initialState);

    const [couponNumber, setCoupon] = useState(2020);
    
    const [userName, setName] = useState({Name:"Ashish", Age:25});

    const generateCoupon = () => {
        setCoupon(couponNumber + Math.ceil(Math.random()*10000))
    }

    let sendNameToReducer = () => {
        //initialState = {userName: "Hotter"};
        debugger;
        //dispatch = useReducer(props.addUser, initialState);
        //dispatch(initialState);
        let st = defaultState;
        
        dispatch();
    }

    let changeName = () => {
        setName({Name : userName.Name + " 25", Age: 75, City : "NY"});        
    }
    console.log("userName " + props.user.userName);
    
    return (
        <div>
            <b>{props.user.userName}</b>
            <hr/>
            <button onClick={generateCoupon}>
            Your generated coupon is {couponNumber}
        </button>
        <hr/>
        <button onClick={changeName}>
            Your name is {userName.Name + "   " + userName.Age + "   " + userName.City}
        </button>
        <hr/>
        <button onClick={sendNameToReducer}>Send To Reducer
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user:state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser:(user) => {
            dispatch(addUserToStore(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FunctionState);