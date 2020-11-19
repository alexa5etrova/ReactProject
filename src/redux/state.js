import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const store = {
    _state: {
        profilePage: {
             postData : [
                {id: 1, message:"Finally, I've got a super rare gybrid", likes: "45"},
                {id: 2, message:"Hi, there", likes: "5"}
               ],
            newPostText: 'Enter you post here'
        },
        dialogPage: {
            dialogData: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Matvey"},
                {id: 3, name: "Olga"}
            ],
            messageData:[
                {id: 1, message:"Hello, how are you?"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Privet!"}
              ],
            newMessageText: ""
        }
             
    },
    _callObserver() {
        console.log("test");
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callObserver = observer;
    },
    

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

        this._callObserver(this._state);
        
    }

};



export default store;

