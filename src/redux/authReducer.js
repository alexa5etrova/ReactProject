import {
    stopSubmit
} from "redux-form";
import {
    authApi
} from "../api/api";

const SET_USER_AUTH = "gybrid/auth/SETH-USER-AUTH";


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
});


export const confirmAuth = () => async (dispatch) => {
    let responce = await authApi.checkAuth()
    if (responce.data.resultCode === 0) {
        let { id, email,login} = responce.data.data;
        dispatch(setUserAuth(id, email, login, true));
    }
};

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let responce = await authApi.login(email, password, rememberMe);
    if (responce.data.resultCode === 0) {
        dispatch(confirmAuth());
    } else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error";
        dispatch(stopSubmit('login', {_error: message}));
    }
};


export const logoutUser = () => async (dispatch) => {
    let responce = await authApi.logout();
    if (responce.data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null, false));
        }
};
    


export default authReducer;