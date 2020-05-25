import {connect} from "react-redux";  
import CheckoutComponent from "../../Components/Checkout/CheckoutComponent";  
 
let mapStateToProps = (state) => { //subscription  
    return{  
        user: state.user.user  
    }  
}  
export default connect(mapStateToProps, null)(CheckoutComponent);