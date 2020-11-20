const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initionalState = {
    postData : [
       {id: 1, message:"Finally, I've got a super rare gybrid", likes: "45"},
       {id: 2, message:"Hi, there", likes: "5"}
      ],
   newPostText: 'Enter you post here'
};

const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes: "0"
            };
            state.postData.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>({ type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;