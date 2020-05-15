//this container is connector which connects basically maps store (state)
// can be used as props in our component

import {connect} from "react-redux";
import UserComponent from "../../Components/User/UserComponent";//importing UI
import {signInUpUser} from "../../../State/Actions"

//subcribing and reading state(data) as props from store(reducers)
const mapStateToProps = (state) => { //state here is actually the store which contains all the reducers or application state(state = appState)
    return{
        user:state.user.user //imported data from store (here user initial state or updated state)
    }
}

//publishing and writing state(data) to store(reducers) through props using dispatched action
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser:(userObject) => {
            dispatch(signInUpUser(userObject));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);