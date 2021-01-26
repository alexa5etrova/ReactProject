import {
    profileApi
} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET-USER-PROFILE";
const UPDATE_STATUS = "UPDATE_STATUS";


let initionalState = {
    postData: [{
            id: 1,
            message: "Finally, I've got a super rare gybrid",
            likes: "45"
        },
        {
            id: 2,
            message: "Hi, there",
            likes: "5"
        }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initionalState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = action.newPostText;
            return {
                ...state,
                postData: [
                    ...state.postData,
                    {
                        id: 3,
                        message: newPost,
                        likes: "0"
                    }
                ]

            };


        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status
            };


        default:
            return state;

    }
}
export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const updateStatus = (status) => ({
    type: UPDATE_STATUS,
    status
})


export const downloadProfileInfo = (userId) => {
    return (dispatch) => {
        profileApi.getProfileInfo(userId)
            .then(responce => {
                dispatch(setUserProfile(responce.data));
            });
    }
}


export const receiveStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(responce => {
                dispatch(updateStatus(responce.data));
            })
    }
}

export const pushStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(updateStatus(status));
                }

            })
    }
}

export default profileReducer;