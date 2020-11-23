import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../redux/StoreContext';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        { store => {
            
        let state = store.getState();
 

        let sendMessage = () => {
        store.dispatch(addMessageActionCreator());
        }
        let onMessagechange = (text) =>{
        store.dispatch(updateNewMessageTextActionCreator(text));
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

        }}

    </StoreContext.Consumer>
   
}

export default DialogsContainer;
