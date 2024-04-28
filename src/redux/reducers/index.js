import { combineReducers } from "redux";
import { productReducer,selectedProduct } from "./productReducer";
//import { selectedProduct } from "../actions/productActions";



const rootReducer=combineReducers({
    allproducts:productReducer,
    product:selectedProduct
})

export default rootReducer