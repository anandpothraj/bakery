import { combineReducers } from "redux";
import userReducer from './user/userReducer';
import cakeReducer from './cake/cakeReducer';
import icecreamReducer from './icecream/icecreamReducer';
import cartReducer from './cart/cartReducer';
import productReducer from './product/productReducer';

const rootReducer = combineReducers(
    {
        user:userReducer,
        cake:cakeReducer,
        icecream:icecreamReducer,
        cart:cartReducer,
        product:productReducer
    }
);

export default rootReducer;