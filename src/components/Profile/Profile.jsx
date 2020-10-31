import React from 'react';
import PostBlock from './PostBlock/PostBlock';

import s from './Profile.module.scss';



const Profile = () =>{
  return(
    <div className={s.profileBlock}>
      <div className={s.bannerImg}></div>
      <PostBlock />
      </div>

  );
}

export default Profile;