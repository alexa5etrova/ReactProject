const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';


let initionalState = {
    userData: [ ]
};

const userReducer = (state = initionalState, action) => {
    switch (action.type) {

        case TOGGLE_FOLLOW: 
            return{
                ...state, 
                userData: state.userData.map(u => (u.id === action.userId) ? {...u, follow: !u.follow} : u)   
            }

           
        case SET_USERS:
            return {
                ...state,
                userData: [...state.userData, ...action.users]
            }    
        
        default:
            return state;
        
    }
}
export const userFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});


export default userReducer;