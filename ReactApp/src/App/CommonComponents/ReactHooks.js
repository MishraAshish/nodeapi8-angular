import React, {useState, useReducer, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
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
    //let [defaultState, dispatch] = useReducer(props.addUser, initialState);
    let user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const [couponNumber, setCoupon] = useState(2020);
    
    const [userName, setName] = useState(user);

    const generateCoupon = () => {
        setCoupon(couponNumber + Math.ceil(Math.random()*10000))
    }

    let sendNameToReducer = () => {
        //initialState = {userName: "Hotter"};
        debugger;
        //dispatch = useReducer(props.addUser, initialState);
        //dispatch(initialState);
        //let st = defaultState;
        
        dispatch(addUserToStore(userName));
    }

    let changeName = () => {
        setName({userName : userName.userName + "Ashish 25", mobile: 75, street : "NY"});        
    }
    console.log("userName ", user);
    
    return (
        <div>
            <b>{user.userName}</b>
            <hr/>
            <button onClick={generateCoupon}>
            Your generated coupon is {couponNumber}
        </button>
        <hr/>
        <button onClick={changeName}>
            Your name is {userName.userName + "   " + userName.mobile + "   " + userName.street}
        </button>
        <hr/>
        <button onClick={sendNameToReducer}>Send To Reducer
            </button>
        </div>
    )
}

export default FunctionState;