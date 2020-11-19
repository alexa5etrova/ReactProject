import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem.jsx';
import s from './Dialogs.module.scss';
import Message from './Message/Message';



const Dialogs = (props) => {

    const dialogNames = props.dialogs.dialogData.map((d) => (<DialogItem name={d.name} id={d.id} />))
    const messages = props.dialogs.messageData.map((m) => (<Message message={m.message} />))

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
        
    }
    let onMessagechange = () =>{
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogNames}
            </div>
            <div className={s.messages}>
                {messages}

                <div>
                    <textarea 
                    placeholder='enter your message here'
                    onChange={onMessagechange}
                    ref={newMessageElement}
                    value={props.dialogs.newMessageText}

                    />
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>


        </div>

    );
}

export default Dialogs;
