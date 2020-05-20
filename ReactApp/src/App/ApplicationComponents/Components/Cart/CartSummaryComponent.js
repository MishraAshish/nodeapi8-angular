import React from "react";

export default function CartSummaryComponent(props) {
    let {
        count,
        amount
    } = props; //destructuring

    return (
        <div> 
            <h2>Cart Summary</h2>
            <p> Amount: {amount} </p>
            <p> Count: {count} </p>
        </div>
    )     
}