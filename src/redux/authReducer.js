import { authApi } from "../api/api";

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
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
        
        default:
            return state;
        
    }
}

export const setUserAuth = (id, email, login)=>({type:SET_USER_AUTH, data:{id, email, login}})


export const confirmAuth = () => {
    return (dispatch) => {
        authApi.checkAuth().then(responce => {
            if(responce.data.resultCode === 0){
                let {id, email, login} = responce.data.data;
                dispatch (setUserAuth(id, email, login));
            }
                     
        });
    }
}

export default authReducer;