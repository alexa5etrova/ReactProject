import React from 'react';
import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import s from './Dialogs.module.scss';
import Message from './Message/Message';



const Dialogs = (props) => {

    const dialogNames = props.dialogs.map((d) => (<DialogItem name={d.name} id={d.id} />))
    const messages = props.messages.map((m) => (<Message message={m.message} />))

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
        
    }
    let onMessagechange = () =>{
        let text = newMessageElement.current.value;
        props.updateMessage(text);

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
                    value={props.newMessageText}

                    />
                </div>
                <div>
                    <button onClick={sendMessage} className={s.sendButton}>Send</button>
                </div>
            </div>


        </div>

    );
}

export default Dialogs;
