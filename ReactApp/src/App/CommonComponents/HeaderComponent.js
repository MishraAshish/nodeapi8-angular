"use strict";
import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
//import {action} from "action/"

let Header = (props) => {
    let {userName, mobile} = props.user;
    //read user from props his name and then create two set of links
    return(
        <div className="col-md-12">
            <div>
            <b>Hi {userName}, Welcome to Synergisticit Shopping Cart App</b>
            </div>
            {userName != "" ?
             <React.Fragment>
                 <NavLink to="/home" exact className="button" activeClassName="success" >Home </NavLink> 
                 <NavLink to="/cart" exact className="button" activeClassName="success" >Cart </NavLink>
                 <NavLink to="/product" exact className="button" activeClassName="success" >Product </NavLink>
                 <NavLink to="/show" exact className="button" activeClassName="success" >DisplayProduct </NavLink>
                 <NavLink to="/user" exact className="button" activeStyle={{ color:'white'}} activeClassName="success" >Admin  </NavLink>
                 <NavLink to="/about" exact className="button" activeClassName="success">About  </NavLink>
             </React.Fragment>
             :
             <React.Fragment>
                 <NavLink to="/home" exact className="button" activeClassName="success" >Home </NavLink> 
                 <NavLink to="/user" exact className="button" activeStyle={{ color:'white'}} activeClassName="success" >Login  </NavLink>
                 <NavLink to="/about" exact className="button" activeClassName="success">About  </NavLink>
             </React.Fragment>
             }
         </div>
    )
}

let mapStateToProps = (state)=>{
    return {
        user:state.user.user
    }
}

// let mapDispatchToProps = (dispatch)=>{
//     return {
//         user:state.user.user
//     }
// }

export default connect(mapStateToProps, null)(Header);
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