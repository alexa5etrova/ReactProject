import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


class DialogsContainer extends React.Component {
    render() {
        return <Dialogs {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogData,
        messages: state.dialogPage.messageData,
        newMessageText: state.dialogPage.newMessageText,

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateMessage: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}



export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    // withLoginRedirect
)(DialogsContainer);
