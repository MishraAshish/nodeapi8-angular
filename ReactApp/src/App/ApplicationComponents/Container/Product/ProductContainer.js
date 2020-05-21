import {connect} from "react-redux";
import ProductComponent from "../../Components/Product/ProductComponent";
import {saveProduct} from "../../../State/Actions";

let mapStateToProps = (state)=>{
    return{
        defaultProd:state.product.defaultProduct,
        loading:state.loading
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        saveProduct:(product) => {
            dispatch(saveProduct(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);