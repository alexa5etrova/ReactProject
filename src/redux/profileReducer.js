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
        case ADD_POST:{
            let copyState = {...state};
            copyState.postData = [...state.postData];
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes: "0"
            };
            copyState.postData.push(newPost);
            copyState.newPostText = "";
            return copyState;
        }

        case UPDATE_NEW_POST_TEXT: {
            let otherState ={...state};
            otherState.newPostText = action.newText;
            return otherState;
        }

        default:
            return state;
        
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>({ type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;