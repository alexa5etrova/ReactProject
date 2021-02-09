import React, { useState } from 'react';


const StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
     
    const openEditMode =()=>{
        setEditMode(true);
    }

    const closeEditMode =()=>{
        setEditMode(false);
        props.pushStatus(status);
    }

    const onStatusChange =(e)=>{
        setStatus(e.currentTarget.value);
    }

    
        return (
        <div>
            {!editMode && 
            <div onDoubleClick={openEditMode}>{props.status || '----'}</div>
            }

            {editMode &&  
            <input autoFocus={true} onChange={onStatusChange} onBlur={closeEditMode} value={status}/>
            }
             
            


        </div>
        );

    
}



export default StatusWithHooks;