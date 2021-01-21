import {
    usersApi
} from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENTPAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'


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
                                    followingInProgress: action.isFetching ? [...state.followingInProgress, action.userid] : state.followingInProgress.filter(id => id !== action.userId)
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


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}


export const doUnfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersApi.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(userFollow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}
export const doFollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersApi.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(userFollow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }

}






export default userReducer;