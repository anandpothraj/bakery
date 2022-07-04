import { FETCH_CAKES_REQUEST, FETCH_CAKES_SUCCESS, FETCH_CAKES_FAILURE } from './cakeConstants';
import data from '../../data';

const cakeData = data.filter(function (prod){
    return prod.type === "cake";
})

export const fetchCakeRequest = () => {
    return {
        type : FETCH_CAKES_REQUEST,
    }
}

export const fetchCakeSuccess = ( cakeData ) => {
    return {
        type : FETCH_CAKES_SUCCESS,
        payload : cakeData
    }
}

export const fetchCakeFailure = ( error ) => {
    return {
        type : FETCH_CAKES_FAILURE,
        payload : error
    }
}


export const fetchCakes = () => {
    return (dispatch) => {
        dispatch(fetchCakeRequest());
        dispatch(fetchCakeSuccess(cakeData))
        if(!cakeData){
            dispatch(fetchCakeFailure("Unable to fetch cake data"))
        }
    }
}

