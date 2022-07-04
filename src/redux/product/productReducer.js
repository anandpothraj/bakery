import { FETCH_PRODUCTS_REQUEST , FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, INCREASE_PRODUCT, DECREASE_PRODUCT } from './productConstants';

const initialState = {
    prodData : [],
    loading : true,
    error : '',
}

const productReducer = ( state = initialState , action ) => {
    switch(action.type){
        case  FETCH_PRODUCTS_REQUEST: return {
            loading: true,
        }
        case FETCH_PRODUCTS_SUCCESS : return {
            loading : false,
            prodData : action.payload
        }
        case FETCH_PRODUCTS_FAILURE : return {
            loading : false,
            error : action.payload
        }
        case INCREASE_PRODUCT : return {
            prodData : state.prodData.filter((c) => 
            c.id === action.payload.id ? (c.inStock = c.inStock + action.payload.qty ) : c.inStock)
        }
        case DECREASE_PRODUCT : return {
            prodData : state.prodData.filter((c) => 
            c.id === action.payload.id ? (c.inStock = c.inStock - action.payload.qty ) : c.inStock)
        }
        
        default : return state;
    }
}

export default productReducer;


