import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {
   let state = props.store.getState();
 

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
        
    }
    let onMessagechange = (text) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(text));

    }

    return (
        <Dialogs 
        sendMessage={sendMessage}
        updateMessage={onMessagechange}
        dialogs={state.dialogPage.dialogData}
        messages={state.dialogPage.messageData}
        newMessageText={state.dialogPage.newMessageText}
        />

    );
}

export default DialogsContainer;
