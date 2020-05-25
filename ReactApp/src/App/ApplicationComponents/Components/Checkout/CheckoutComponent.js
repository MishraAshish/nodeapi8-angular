import React, {useState} from "react";  //useState is a hook provides implementation of this.state and this.setState 
                                        //to make changes in functional component
import CheckoutList from "../../Container/Cart/CartListContainer";  
import CheckoutSummary from "../../Container/Cart/CartSummaryContainer";  
 
export default function Checkout(props){  
    
    const [paymentProcessed, updatePayment] = useState(false); //initialization of state through react hook useState

    //const [user, updateUser] = useState({name:"Andrew",age:"16"});

    const makePayment = ()=>{ //event at which we want to update the state
        updatePayment(!paymentProcessed); //equivalent method to setState : but it just upates one state linked to it

        //updateUser({name:"Linh",age:"18"});
    }
    
    return(
        <React.Fragment>
            {!paymentProcessed ?
            <div className="checkoutComponent">  
                <h2>Checking out </h2>  
                <div className="col-md-12">  
                <b>Hi, {props.user.userName != "" ? props.user.userName: "Tom"} </b>  
                 
                
                </div>  
                <CheckoutList donotshowInputBox={true}/>  
                <CheckoutSummary/>  
                <button onClick={makePayment}>
                        Make Payment
                </button>
                {/* {user.name +" " +user.age} */}
            </div>          
            :
            <b> {"Payment Processed"} </b>
            //{user.name +" " +user.age}
            }
        </React.Fragment>
    )  
}

//Coupon Page - CouponComponent
//Button - Generate Coupon
//Upon Click Generate a random coupon of - 6 digits
//Use Reducer to update the coupon value
//Create action to pass coupon to reducer
//CouponContainer to glue up the process
//second set -
//On checkout Page : It coupon is present then show message - Coupon Applied and the value else show You can generate a coupon at coupon page