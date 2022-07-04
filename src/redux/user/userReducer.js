import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE } from './userConstant';

let status = localStorage.getItem("loggedIn");
let loggedIn;
if(status === null){
    loggedIn = false
}
else{
    loggedIn = JSON.parse(status);
}

const initialState = {
    loading : false,
    loggedIn : loggedIn,
    error : '',
}

const userReducer = ( state = initialState, action ) => {
    switch(action.type){
        case USER_LOGIN_REQUEST : return {
            loading: true,
        }
        case USER_LOGIN_SUCCESS : return {
            loading : false,
            loggedIn : action.payload
        }
        case USER_LOGIN_FAILURE : return {
            loading : false,
            error : action.payload
        }
        case USER_LOGOUT_REQUEST : return {
            loading: true,
        }
        case USER_LOGOUT_SUCCESS : return {
            loading : false,
            loggedIn : action.payload
        }
        case USER_LOGOUT_FAILURE : return {
            loading : false,
            error : action.payload
        }
        default : return state
    }

}

export default userReducer;