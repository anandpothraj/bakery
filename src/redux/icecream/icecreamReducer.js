import { FETCH_ICECREAMS_REQUEST , FETCH_ICECREAMS_SUCCESS, FETCH_ICECREAMS_FAILURE} from './icecreamConstants';

const initialState = {
    icecreamData : [],
    loading : true,
    error : '',
}

const icecreamReducer = ( state = initialState , action ) => {
    switch(action.type){
        case  FETCH_ICECREAMS_REQUEST: return {
            loading: true,
        }
        case FETCH_ICECREAMS_SUCCESS : return {
            loading : false,
            icecreamData : action.payload
        }
        case FETCH_ICECREAMS_FAILURE : return {
            loading : false,
            error : action.payload
        }
        
        default : return state;
    }
}

export default icecreamReducer;