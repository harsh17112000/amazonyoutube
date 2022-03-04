import {getProductsreducer} from "./Productsreducer";
import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata:getProductsreducer
});


export default rootreducers;