"use strict";

import React from "react";

let Header = (props) => {
    return(
        <div>
            <b>{props.title}</b>
            {/* {props.children[0]}
            {props.children[1]} */}
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

export function GetBody() {    
    return(//JSX
            <React.Fragment>
                <b>3. This is the place where detail gets rendered</b>
                <b>4. This is the place where detail gets rendered</b>
            </React.Fragment>
    )    
}