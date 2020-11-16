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
            newMessageText: "enter here your message"
        }
             
    },

    getState() {
        return this._state;
    },

    _callObserver() {
        console.log("test");
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likes: "0"
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callObserver(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callObserver(this._state);
    },

    addMessage() {
        let newMessage ={
            id: 4,
            message: this._state.dialogPage.newMessageText
        };
        this._state.dialogPage.messageData.push(newMessage);
        this._state.dialogPage.newMessageText ="";
        this._callObserver(this._state);
    },

    updateNewMessageText(text) {
        this._state.dialogPage.newMessageText=text;
        this._callObserver(this._state);
    },

    subscribe(observer) {
        this._callObserver = observer;
    }

}






export default store;

