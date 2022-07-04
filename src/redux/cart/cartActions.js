import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CART_QTY, EMPTY_CART } from "./cartConstants"

export const addCart = ( cake ) => {
    return {
        type : ADD_TO_CART,
        payload : cake
    }
}

export const removeCart = ( cake ) => {
    return {
        type : REMOVE_FROM_CART,
        payload : cake
    }
}

export const changeQty = ( cake ) => {
    return {
        type : CHANGE_CART_QTY,
        payload : cake
    }
}

export const emptyCart = () => {
    return{
        type : EMPTY_CART,
    }
}


export const addToCart = ( cake ) => {
    return(dispatch) => {
        dispatch(addCart(cake))
    }
} 

export const removeFromCart = ( cake ) => {
    return(dispatch) => {
        dispatch(removeCart(cake))
    }
} 



export const changeCartQuantity = ( cake ) => {
    return(dispatch) => {
        dispatch(changeQty(cake))
    }
}

export const placeOrder = (  ) => {
    return(dispatch) => {
        dispatch(emptyCart())
    }
}

