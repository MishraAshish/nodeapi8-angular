"use strict";
import React from "react";

let Footer = (props)=>{ //props are immutable, only way
    console.log("Footer Props :", props)
    //props.msg = "asdasdas";// this must not be done, we should not update parent values coming as props
    return(
        <div>
            <hr/>
            <p>{props.msg}</p>
            <p>Copyrights @{props.year} Synergisticit</p>
        </div>
    )
}

export default Footer;