"use strict";

import React from "react";
import {NavLink} from "react-router-dom";

let Header = (props) => {
    //read user from props his name and then create two set of links
    return(
        <div className="col-md-12">
             <React.Fragment>
                 <NavLink to="/home" exact className="button" activeClassName="success" >Home </NavLink> 
                 <NavLink to="/user" exact className="button" activeStyle={{ color:'white'}} activeClassName="success" >Login  </NavLink>
                 <NavLink to="/about" exact className="button" activeClassName="success">About  </NavLink>
             </React.Fragment>
         </div>
 )
}
export default Header;

// export function GetName() {    
//     return(//JSX
//         <div>
//             <b>Get Name Function Called</b>
//         </div>
//     )    
// }

// export function GetAge() {    
//     return(//JSX
//         <div>
//             <b>GetAge Function Called</b>
//         </div>
//     )    
// }

// export function GetBody() {    
//     return(//JSX
//             <React.Fragment>
//                 <b>3. This is the place where detail gets rendered</b>
//                 <b>4. This is the place where detail gets rendered</b>
//             </React.Fragment>
//     )    
// }