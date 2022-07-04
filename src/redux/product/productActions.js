import { FETCH_PRODUCTS_REQUEST , FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, INCREASE_PRODUCT, DECREASE_PRODUCT } from './productConstants';
import data from '../../data';

export const fetchProductRequest = () => {
    return {
        type : FETCH_PRODUCTS_REQUEST,
    }
}

export const fetchProductSuccess = ( data ) => {
    return {
        type : FETCH_PRODUCTS_SUCCESS,
        payload : data
    }
}

export const fetchProductFailure = ( error ) => {
    return {
        type : FETCH_PRODUCTS_FAILURE,
        payload : error
    }
}

export const purchaseProduct = ( prod ) => {
    return {
        type : DECREASE_PRODUCT,
        payload : prod
    }
}

export const deleteProduct = ( prod ) => {
    return {
        type : INCREASE_PRODUCT,
        payload : prod
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest());
        dispatch(fetchProductSuccess(data))
        if(!data){
            dispatch(fetchProductFailure("Unable to fetch Product data"))
        }
    }
}

export const decreaseProd = (prod) => {
    return (dispatch) => {
        dispatch(purchaseProduct(prod));
    }
}

export const increaseProd = (prod) => {
    return (dispatch) => {
        dispatch(deleteProduct(prod));
    }
}

