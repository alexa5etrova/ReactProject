import {renderEntireDoc} from './../render';

let state = {
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
         
}

export let addPost = () =>{
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likes: "0"
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireDoc(state);
}
export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    renderEntireDoc(state);
}

export let addMessage = () =>{
    let newMessage ={
        id: 4,
        message: state.dialogPage.newMessageText
    };
    state.dialogPage.messageData.push(newMessage);
    state.dialogPage.newMessageText ="";
    renderEntireDoc(state);
}

export let updateNewMessageText = (text)=> {
    state.dialogPage.newMessageText=text;
    renderEntireDoc(state);
}




export default state;

