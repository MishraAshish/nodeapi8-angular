"use strict";

import React from "react";

let Header = (props) => {
    return(
        <div>
            <h1>This is our header component</h1>
            {props.children[0]}
            {props.children[1]}
        </div>
    )
}
export default Header;

export function GetName() {    
    return(//JSX
        <div>
            <b>Get Name Function Called</b>
        </div>
    )    
}

export function GetAge() {    
    return(//JSX
        <div>
            <b>GetAge Function Called</b>
        </div>
    )    
}