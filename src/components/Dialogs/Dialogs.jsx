import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem.jsx';
import s from './Dialogs.module.scss';
import Message from './Message/Message';


const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>

        <div>
            <Field name={"newMessageText"} component={"textarea"} placeholder='enter your message here' />
        </div>
        <div>
            <button className={s.sendButton}>Send</button>
        </div>

    </form>
}

const DialogReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);




const Dialogs = (props) => {

    const dialogNames = props.dialogs.map((d) => (<DialogItem name={d.name} id={d.id} />))
    const messages = props.messages.map((m) => (<Message message={m.message} />))

  
    const onSubmit = (values)=> {
            props.sendMessage(values.newMessageText)
        }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogNames}
            </div>
            <div className={s.messages}>
                {messages}
                <DialogReduxForm onSubmit={onSubmit}/>
            </div>
            


        </div>

    );
}

export default Dialogs;
