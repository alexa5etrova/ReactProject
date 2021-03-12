
import React from 'react';
import s from './FindUsers.module.scss';
import userPhoto from './../../assets/images/userPhoto.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../commons/utils/Paginator';




const FindUsers = (props) => {
   
    return (<div>
        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />




        {
            props.users.map(u =>
                <div key={u.id} className={s.userContainer}>
                    <div className={s.avatarCont}>
                        <div className={s.round}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userAva} alt={"user"}/>
                            </NavLink>
                        </div>


                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.includes(u.id)} className={s.btnFollow} onClick={() => {
                                    props.doUnfollowUser(u.id)
                                }}>Unfollow</button>

                                
                                : <button disabled={props.followingInProgress.some(id=>id === u.id)} className={s.btnFollow} onClick={() => {
                                    props.doFollowUser(u.id)
                                }}>Follow</button>}

                        </div>


                    </div>
                    <div className={s.userInfoShield}>
                        <div>
                            <div>{u.name}</div>
                            <div className={s.status}>{u.status}</div>
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