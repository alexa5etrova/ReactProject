import React from 'react';
import s from './ProfileInfo.module.scss';
import SocialMediaIcons from './SocialMediaIcons';
import tick from './../../assets/images/tickCross/tick.svg';
import cross from './../../assets/images/tickCross/cross.svg';
import userPhoto from './../../assets/images/userPhoto.png';
import Status from './Status';


const ProfileInfo = (props) => {
    return (
        <div className={s.descriptionBlock}>
            <div className={s.imgContainer}>
                {props.profile.photos.large
                ?<img src={props.profile.photos.large} alt="user"/>
                :<img src={userPhoto} alt="user"/>
            }
                
            </div>

            <div className={s.infoContainer}>
                <div className={s.userName}>{props.profile.fullName}</div>
                <div className={s.aboutMe}>{props.profile.aboutMe}</div>
                <Status className={s.status} status={props.status} pushStatus={props.pushStatus}/>    

                <div className={s.lookingForAJob}>
                    <div className={s.requireJob}>{'Looking for a job:'}{props.profile.lookingForAJob
                            ? <img className={s.icon} src={tick} alt='tick icon' />
                            : <img className={s.icon} src={cross} alt='cross icon' />}
                    </div>
                                    
            
                    
                    {props.profile.lookingForAJob
                        ? (<div className={s.requireJob}>{'What I am lookig for: '}
                        <span className={s.positionRequested}>{props.profile.lookingForAJobDescription}</span>
                        </div>)
                        : null
                    }

                </div>
                <div className={s.smContainer}><SocialMediaIcons contacts={props.profile.contacts} />
                </div>
            </div>

        </div>





    )
}

export default ProfileInfo;