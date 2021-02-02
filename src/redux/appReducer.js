import { confirmAuth } from "./authReducer";

const INITIALIZE_APP = 'INITIALIZE_APP';


let initionalState = {
    initionalized: false
};

const appReducer = (state = initionalState, action) => {
    switch (action.type) {

        case INITIALIZE_APP:
            return {
                ...state,
                initionalized: true
            }

            default:
                return state;

    }
}

export const initionalizedSuccess = () => ({ type: INITIALIZE_APP});


export const initializeApp = () => (dispatch)=> {
    let promise = dispatch(confirmAuth());
    Promise.all([promise])
        .then(()=>{
            dispatch(initionalizedSuccess());
        });
}

export default appReducer;