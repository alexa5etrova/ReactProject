const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


let initionalState = {
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

const dialogReducer = (state = initionalState, action) => {
    switch (action.type) {
        case  UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }

        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: "",
                messageData: [...state.messageData, {id: 4, message: newMessage}]

            }
                  
            
        default: 
            return state;     

    }
}
export const addMessageActionCreator = ()=>({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>({type: UPDATE_NEW_MESSAGE_TEXT, text: text});


export default dialogReducer;