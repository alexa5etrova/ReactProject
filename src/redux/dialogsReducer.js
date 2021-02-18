const ADD_MESSAGE = "gybrid/dialogs/ADD-MESSAGE";



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
    
}

const dialogReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                messageData: [...state.messageData, {id: 4, message: newMessage}]

            }
                  
            
        default: 
            return state;     

    }
}
export const sendMessage = (newMessageText)=>({type: ADD_MESSAGE, newMessageText});



export default dialogReducer;