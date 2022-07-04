import { FETCH_CAKES_REQUEST , FETCH_CAKES_SUCCESS, FETCH_CAKES_FAILURE } from './cakeConstants';

const initialState = {
    cakeData : [],
    loading : true,
    error : '',
}

const cakeReducer = ( state = initialState , action ) => {
    switch(action.type){
        case  FETCH_CAKES_REQUEST: return {
            loading: true,
        }
        case FETCH_CAKES_SUCCESS : return {
            loading : false,
            cakeData : action.payload
        }
        case FETCH_CAKES_FAILURE : return {
            loading : false,
            error : action.payload
        }
        
        default : return state;
    }
}

export default cakeReducer;