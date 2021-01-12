import React from 'react';
import LoadingImg from '../commons/LoadingImg';
import PostBlockContainer from './PostBlock/PostBlockContainer';

import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo';



const Profile = (props) => {

  if (!props.profile) {
    return <LoadingImg />
  }

  return (
    <div className={s.profileBlock}>
      <div className={s.banner}></div>
      <ProfileInfo profile={props.profile} />
      <PostBlockContainer />
    </div>

  );
}

export default Profile;