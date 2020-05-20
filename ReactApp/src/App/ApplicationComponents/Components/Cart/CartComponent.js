import React from "react";
import CartListComponent from "../../Container/Cart/CartListContainer";
import CartSummaryComponent from "../../Container/Cart/CartSummaryContainer";

//as there are no dynamic changes required in this parent so keeping it as functional component
export default function CartComponent(props){    
    return(
        <div className="cartComponent">
            <h2>Shopping Cart Using Redux</h2>
            <p><b>Cart Length : {props.cartlength}</b></p>

            <button onClick={props.addItemToCart} >
                Add Item
            </button>

            <button onClick={props.emptyTheCart} >
                Empty
            </button>

            <CartListComponent/>            
            <CartSummaryComponent/>

            {/* <button onClick={() => props.saveCartItems(props.items, props.userid)} >
                Save For Checkout
            </button> */}

            <button>
                Save For Checkout
            </button>
        </div>
    )
}