import React from 'react';
import s from './ProfileInfo.module.scss';
import SocialMediaIcons from './SocialMediaIcons';
import tick from './../../assets/images/tickCross/tick.svg';
import cross from './../../assets/images/tickCross/cross.svg';



const ProfileInfo = (props) => {
    return <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>Looking for a job: {props.profile.lookingForAJob ? <img className={s.icon} src={tick} alt='tick icon'/> : <img className={s.icon} src={cross} alt='cross icon'/>}
            </div>
            <SocialMediaIcons contacts={props.profile.contacts}/>
        </div>

    
}

export default ProfileInfo;