const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENTPAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';


let initionalState = {
    userData: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1
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
                userData: action.users 
                // userData:[...state.userData, ...action.users]
            }  
        case SET_CURRENTPAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }   
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }       
        
        default:
            return state;
        
    }
}
export const userFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENTPAGE, currentPage});
export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count});


export default userReducer;