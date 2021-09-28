import {
    combineReducers
} from "redux";
import Addtocart from "./add";
import shoppingcart from "./cart";

const All = combineReducers({
    add: Addtocart,
    cart:shoppingcart
})
export default All