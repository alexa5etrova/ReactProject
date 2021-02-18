import {
    profileApi
} from "../api/api";

const ADD_POST = "gybrid/profile/ADD-POST";
const SET_USER_PROFILE = "gybrid/profile/SET-USER-PROFILE";
const UPDATE_STATUS = "gybrid/profile/UPDATE_STATUS";
const DELETE_POST = "gybrid/profile/DELETE-POST";


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

        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.id)
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

export const deletePost = (id) => ({
    type: DELETE_POST,
    id
})


export const downloadProfileInfo = (userId) => async (dispatch) => {
    let responce = await profileApi.getProfileInfo(userId);
    dispatch(setUserProfile(responce.data));
};



export const receiveStatus = (userId) => async (dispatch) => {
    let responce = await profileApi.getStatus(userId);
    dispatch(updateStatus(responce.data));
}



export const pushStatus = (status) => async (dispatch) => {
    let responce = await profileApi.updateStatus(status);
    if (responce.data.resultCode === 0) {
        dispatch(updateStatus(status));
    }
};





export default profileReducer;