import React from 'react';
import PostBlock from './PostBlock/PostBlock';

import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo';



const Profile = (props) => {

  return (
    <div className={s.profileBlock}>
      <div className={s.banner}></div>
      <ProfileInfo />
      <PostBlock 
                postData={props.posts.postData} 
                newPostText={props.posts.newPostText}
                dispatch={props.dispatch}
                />
    </div>

  );
}

export default Profile;