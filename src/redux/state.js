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
        if (action.type === "ADD-POST"){
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likes: "0"
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callObserver(this._state);

        } else if ( action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText;
            this._callObserver(this._state);

        } else if (action.type === "ADD-MESSAGE"){
            let newMessage ={
                id: 4,
                message: this._state.dialogPage.newMessageText
            };
            this._state.dialogPage.messageData.push(newMessage);
            this._state.dialogPage.newMessageText ="";
            this._callObserver(this._state);

        }else if (action.type === "UPDATE-NEW-MESSAGE-TEXT"){
            this._state.dialogPage.newMessageText=action.text;
            this._callObserver(this._state);
        }
    }

}






export default store;

