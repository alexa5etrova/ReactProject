const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENTPAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';


let initionalState = {
    userData: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }          
        
        default:
            return state;
        
    }
}
export const userFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENTPAGE, currentPage});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export default userReducer;