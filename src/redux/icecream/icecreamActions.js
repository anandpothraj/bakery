import { FETCH_ICECREAMS_REQUEST, FETCH_ICECREAMS_SUCCESS, FETCH_ICECREAMS_FAILURE} from './icecreamConstants';
import data from '../../data';

const icecreamData = data.filter(function (prod){
    return prod.type === "icecream"
})

export const fetchIcecreamRequest = () => {
    return {
        type : FETCH_ICECREAMS_REQUEST,
    }
}

export const fetchIcecreamSuccess = ( icecreamData ) => {
    return {
        type : FETCH_ICECREAMS_SUCCESS,
        payload : icecreamData
    }
}

export const fetchIcecreamFailure = ( error ) => {
    return {
        type : FETCH_ICECREAMS_FAILURE,
        payload : error
    }
}

export const fetchIcecreams = () => {
    return (dispatch) => {
        dispatch(fetchIcecreamRequest());
        dispatch(fetchIcecreamSuccess(icecreamData))
        if(!icecreamData){
            dispatch(fetchIcecreamFailure("Unable to fetch icecream data"))
        }
    }
}

























