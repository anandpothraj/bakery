import { ADD_TO_CART , REMOVE_FROM_CART, CHANGE_CART_QTY, EMPTY_CART } from './cartConstants';

const initialState = {
    cart : [],
}

const cartReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case ADD_TO_CART :
        return { 
            ...state, 
            cart: [...state.cart, { ...action.payload, qty: 1 }] };

        case REMOVE_FROM_CART:
        return {
            ...state,
            cart: state.cart.filter((c) => c.id !== action.payload.id),
        };

        case CHANGE_CART_QTY:
        return {
            ...state,
            cart: state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty),
        };
        case EMPTY_CART:
        return {
            ...state,
            cart: []
        };

        default:
        return state;
    }
}

export default cartReducer;