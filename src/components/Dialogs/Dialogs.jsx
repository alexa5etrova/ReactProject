import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';

const DialogItem = (props) =>{

    
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog}>
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    )
}

const Message =(props)=>{
    return(
        <div className={s.message}>{props.message}</div>

    )
}

const Dialogs = () =>{

    const dialogData = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Matvey"},
        {id: 3, name: "Olga"},

    ]
    const dialogNames = dialogData.map((d)=>(
    <DialogItem name={d.name} id={d.id}/>
))

    const messageData = [
        {id: 1, message:"Hello, how are you?"},
        {id: 2, message: "Hi"}
    ]

    const messages = messageData.map((m)=>(
        <Message message={m.message} />
    ))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogNames }
                
                

            </div>
            <div className={s.messages}>
                
               { messages }
                
            </div>
            
        </div>

    );
}

export default Dialogs;
