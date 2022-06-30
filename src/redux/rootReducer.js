import { combineReducers } from "redux";
import userReducer from './user/userReducer';
import cakeReducer from './cake/cakeReducer';
import icecreamReducer from './icecream/icecreamReducer';

const rootReducer = combineReducers(
    {
        user:userReducer,
        cake:cakeReducer,
        icecream:icecreamReducer,
    }
);

export default rootReducer;