import React from "react";

let Home = (props)=>{
    console.log("Home Props :", props)
    return(//React.Fragment Returns one parent element without any additional div or parent
        <React.Fragment> 
            <hr/>
            <p><b>{props.msg}</b></p>

            {props.children.length >= 1 ? props.children[0] : "No Data To Render"}
            
            {props.children.length == 2 ? props.children[1] : "No Data From Body Component"}
            
        </React.Fragment>
    )
}

export default Home;