import {
    usersApi
} from "../api/api";

const TOGGLE_FOLLOW = 'gybrid/users/TOGGLE-FOLLOW';
const SET_USERS = 'gybrid/users/SET-USERS';
const SET_CURRENTPAGE = 'gybrid/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'gybrid/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'gybrid/users/TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'gybrid/users/TOGGLE_FOLLOWING_PROGRESS'


let initionalState = {
    userData: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

};

const userReducer = (state = initionalState, action) => {
    switch (action.type) {

        case TOGGLE_FOLLOW:
            return {
                ...state,
                userData: state.userData.map(u => (u.id === action.userId) ? {
                    ...u,
                    followed: !u.followed
                } : u)
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
                            case TOGGLE_FOLLOWING_PROGRESS:
                                return {
                                    ...state,
                                    followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
                                }

                                default:
                                    return state;

    }
}
export const userFollow = (userId) => ({
    type: TOGGLE_FOLLOW,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENTPAGE,
    currentPage
});
export const setTotalUsersCount = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    count
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let responce = await usersApi.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(responce.data.items));
    dispatch(setTotalUsersCount(responce.data.totalCount));
};
    
const followingUnfollowingActionCreator = (userId, apiMethod) => async (dispatch)=>{
    dispatch(toggleFollowingProgress(true, userId));
    let responce = await apiMethod(userId);
    if (responce.data.resultCode === 0) {
        dispatch(userFollow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
};



export const doUnfollowUser = (userId) => {
    return followingUnfollowingActionCreator(userId, usersApi.unfollowUser.bind(usersApi));
};
export const doFollowUser = (userId) => {
    return followingUnfollowingActionCreator(userId, usersApi.followUser.bind(usersApi));
};
    

   
export default userReducer;