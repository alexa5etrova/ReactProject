import React from 'react';
import s from './Dialogs.module.scss';

const Dialogs = () =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Andry</div>
                <div className={s.dialog}>Igor</div>
                <div className={s.dialog}>Maksim</div>
                <div className={s.dialog}>Alena</div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello, how  are you?</div>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>Nihau</div>
                <div className={s.message}>Yo</div>
            </div>
            
        </div>

    );
}

export default Dialogs;
