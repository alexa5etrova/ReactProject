import React from 'react';
import s from './FindUsers.module.scss';


const FindUsers = (props) => {

    if(props.users.length === 0){
        props.setUsers([
                {id: 1, photoUrl: 'https://99px.ru/sstorage/41/2018/06/image_411006181357097648679.jpg', follow: true, userName: "Sergey k.", location: {city: "Moscow", country: "Russia"}, status: "Hey, who are there?"},
                {id: 2,  photoUrl: 'https://avavatar.ru/images/avatars/1/avatar_Zjppez036dMr6Zp5.jpg', follow: false, userName: "Margot", location: {city: "ST.Peterbsurg", country: "Russia"}, status: "Sunny is shining"}
               ]
        )
    }

      return (
        <div>
            {
                props.users.map(u => 
                <div key={u.id} className={s.userContainer}>
                    <div className={s.avatarCont}>
                        <div>
                            <img src={u.photoUrl} className={s.userAva}/>
                        </div>
                        <div>
                            {u.follow
                            ? <button className={s.btnFollow} onClick={()=>{props.toggleFollow(u.id)}}>Unfollow</button>
                            : <button className={s.btnFollow} onClick={()=>{props.toggleFollow(u.id)}}>Follow</button>}
                            
                        </div>
                    </div>
                    <div className={s.userInfoShield}>
                        <div>
                            <div>{u.userName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                             <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>)
            }
            

        </div>
    )
}


export default FindUsers