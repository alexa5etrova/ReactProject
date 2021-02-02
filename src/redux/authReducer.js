import {
    stopSubmit
} from "redux-form";
import {
    authApi
} from "../api/api";

const SET_USER_AUTH = 'SETH-USER-AUTH';


let initionalState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initionalState, action) => {
    switch (action.type) {

        case SET_USER_AUTH:
            return {
                ...state,
                ...action.payload,
            }

            default:
                return state;

    }
}

export const setUserAuth = (id, email, login, isAuth) => ({
    type: SET_USER_AUTH,
    payload: {
        id,
        email,
        login,
        isAuth
    }
})


export const confirmAuth = () => {
    return (dispatch) => {
        authApi.checkAuth().then(responce => {
            if (responce.data.resultCode === 0) {
                let {
                    id,
                    email,
                    login
                } = responce.data.data;
                dispatch(setUserAuth(id, email, login, true));
            }

        });
    }
}
export const loginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(confirmAuth());
            } else {
                let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error";
                dispatch(stopSubmit('login', {
                    _error: message
                }));
            }

        });
    }
}
export const logoutUser = () => {
    return (dispatch) => {
        authApi.logout().then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setUserAuth(null, null, null, false));
            }

        });
    }
}

export default authReducer;