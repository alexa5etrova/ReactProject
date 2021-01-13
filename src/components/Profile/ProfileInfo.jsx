import React from 'react';
import s from './ProfileInfo.module.scss';
import SocialMediaIcons from './SocialMediaIcons';
import tick from './../../assets/images/tickCross/tick.svg';
import cross from './../../assets/images/tickCross/cross.svg';



const ProfileInfo = (props) => {
    return <div className={s.descriptionBlock}>
        <div className={s.imgContainer}>
            <img src={props.profile.photos.large} />
        </div>

        <div className={s.infoContainer}>
            <div className={s.userName}>{props.profile.fullName}</div>
            <div className={s.aboutMe}>{props.profile.aboutMe}</div>
            <div className={s.lookingForAJob}>
                <div className={s.requireJob}>{'Looking for a job:'}</div>
                <div className={s.crossTick}> {
                    props.profile.lookingForAJob
                        ? <img className={s.icon} src={tick} alt='tick icon' />
                        : <img className={s.icon} src={cross} alt='cross icon' />
                }
                </div>
                 
            </div>
            <SocialMediaIcons className={s.smContainer} contacts={props.profile.contacts} />
        </div>


    </div>


}

export default ProfileInfo;