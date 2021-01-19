
import React from 'react';
import s from './FindUsers.module.scss';
import userPhoto from './../../assets/images/userPhoto.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';




let FindUsers = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }



    return (<div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}>{p}  </span>
            })}
        </div>




        {
            props.users.map(u =>
                <div key={u.id} className={s.userContainer}>
                    <div className={s.avatarCont}>
                        <div className={s.round}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userAva} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={s.btnFollow} onClick={() => {

                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'b4b88448-459a-4ee2-987d-453bfb5dee49'
                                            }
                                        })
                                        .then(response => {
                                            if(response.data.resultCode === 0){
                                                props.userFollow(u.id)

                                            }
                                   
                                        });
                                    
                                    props.userFollow(u.id)
                                }}>Unfollow</button>
                                : <button className={s.btnFollow} onClick={() => {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'b4b88448-459a-4ee2-987d-453bfb5dee49'
                                            }
                                        })
                                        .then(response => {
                                            if(response.data.resultCode === 0){
                                                props.userFollow(u.id)

                                            }
                                   
                                        });
                                     }}>Follow</button>}

                        </div>
                    </div>
                    <div className={s.userInfoShield}>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>"u.location.country"</div>
                            <div>"u.location.city"</div>
                        </div>
                    </div>
                </div>)
        }


    </div>)
}


export default FindUsers;