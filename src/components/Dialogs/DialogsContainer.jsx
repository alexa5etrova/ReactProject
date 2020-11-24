import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';




let mapStateToProps =(state)=>{
    return{
        dialogs: state.dialogPage.dialogData,
        messages: state.dialogPage.messageData,
        newMessageText: state.dialogPage.newMessageText
    }
};

let mapDispatchToProps =(dispatch)=>{
    return{
        sendMessage: ()=>{
            dispatch(addMessageActionCreator());
        },
        updateMessage: (text)=>{
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
