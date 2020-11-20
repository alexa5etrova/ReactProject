import React from 'react';
import PostBlockContainer from './PostBlock/PostBlockContainer';

import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo';



const Profile = (props) => {

  return (
    <div className={s.profileBlock}>
      <div className={s.banner}></div>
      <ProfileInfo />
      <PostBlockContainer 
                store={props.store} 
                
                />
    </div>

  );
}

export default Profile;