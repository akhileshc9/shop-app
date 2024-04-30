import { combineReducers } from "redux";
import { cartProduct, productReducer,selectedProduct } from "./productReducer";
//import { selectedProduct } from "../actions/productActions";



const rootReducer=combineReducers({
    allproducts:productReducer,
    product:selectedProduct,
    crtproduct:cartProduct,
})

export default rootReducer