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

export const setUserAuth = (userId, email, login)=>({type:SET_USER_AUTH, data:{userId, email, login}})


export default authReducer;