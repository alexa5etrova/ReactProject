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

        case UPDATE_NEW_POST_TEXT: 
            return{
                ...state,
                newPostText:action.newText
            }
        case ADD_POST:
            let newPost=state.newPostText;
            return {
                ...state,
                newPostText: "",
                postData:[
                    ...state.postData,
                    {id: 3, message: newPost, likes: "0"}]

            };
        default:
            return state;
        
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>({ type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;