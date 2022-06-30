import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE } from './userConstant';

export const userLoginRequest = () => {
    return {
        type : USER_LOGIN_REQUEST,
    }
}

export const userLoginSuccess = ( loggedIn ) => {
    return {
        type : USER_LOGIN_SUCCESS,
        payload : loggedIn
    }
}

export const userLoginFailure = ( error ) => {
    return {
        type : USER_LOGIN_FAILURE,
        payload : error
    }
}

export const userLogoutRequest = () => {
    return {
        type : USER_LOGOUT_REQUEST,
    }
}

export const userLogoutSuccess = ( loggedIn ) => {
    return {
        type : USER_LOGOUT_SUCCESS,
        payload : loggedIn
    }
}

export const userLogoutFailure = ( error ) => {
    return {
        type : USER_LOGOUT_FAILURE,
        payload : error
    }
}

export const LoginUser = () => {
    return (dispatch) => {
        dispatch(userLoginRequest());
        let loggedIn = true;
        dispatch(userLoginSuccess(loggedIn))
        if(loggedIn === false){
            dispatch(userLoginFailure("Unable to login"))
        }
    }
}

export const LogoutUser = () => {
    return (dispatch) => {
        dispatch(userLogoutRequest());
        let loggedIn = false;
        dispatch(userLogoutSuccess(loggedIn))
        if(loggedIn === true){
            dispatch(userLogoutFailure("Unable to login"))
        }
    }
}
