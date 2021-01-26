import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { sendMessage } from '../../redux/dialogsReducer';
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
        
    }
};





export default compose (
    connect(mapStateToProps, {sendMessage}),
    withLoginRedirect
)(DialogsContainer);
