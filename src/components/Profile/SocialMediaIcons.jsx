import React from 'react';
import s from './SocialMediaIcons.module.scss';
import facebookIcon from './../../assets/images/socialMediaIcons/facebookIcon.svg';
import twitterIcon from './../../assets/images/socialMediaIcons/twiterIcon.svg';
import webIcon from './../../assets/images/socialMediaIcons/webIcon.svg';
import vkIcon from './../../assets/images/socialMediaIcons/vkIcon.svg';
import instagramIcon from './../../assets/images/socialMediaIcons/instagramIcon.svg';
import youtubeIcon from './../../assets/images/socialMediaIcons/youtubeIcon.svg';
import githubIcon from './../../assets/images/socialMediaIcons/githubIcon.svg';


const SocialMediaIcons = (props) => {
    
    
    return <div className={s.iconContainer}>



        <div className={s.iconItem}>{
            !props.contacts.facebook
                ? null
                : <a href={'http://' + props.contacts.facebook} target='blank'>
                    <img className={s.icon} src={facebookIcon} alt='facebook icon' />
                </a>}
        </div>

        <div className={s.iconItem}>{
            !props.contacts.website
                ? null
                : <a href={'http://' + props.contacts.website} target='blank'>
                    <img className={s.icon} src={webIcon} alt='web icon' />
                </a>}
        </div>

        <div className={s.iconItem}>{
            !props.contacts.vk
                ? null
                : <a href={'http://' + props.contacts.vk} target='blank'>
                    <img className={s.icon} src={vkIcon} alt='vkontakte icon' />
                </a>}
        </div>

        <div className={s.iconItem}>{
            !props.contacts.twitter
                ? null
                : <a href={'http://' + props.contacts.twitter} target='blank'>
                    <img className={s.icon} src={twitterIcon} alt='twitter icon' />
                </a>}
        </div>

        <div className={s.iconItem}>{
            !props.contacts.instagram
                ? null
                : <a href={'http://' + props.contacts.instagram} target='blank'>
                    <img className={s.icon} src={instagramIcon} alt='instagram icon' />
                </a>}
        </div>

        <div className={s.iconItem}>{
            !props.contacts.youtube
                ? null
                : <a href={'http://' + props.contacts.youtube} target='blank'>
                    <img className={s.icon} src={youtubeIcon} alt='youtube icon' />
                </a>}
        </div>

        <div className={s.iconItem}>{
            !props.contacts.github
                ? null
                : <a href={'http://' + props.contacts.github} target='blank'>
                    <img className={s.icon} src={githubIcon} alt='github icon' />
                </a>}
        </div>

    </div>



}

export default SocialMediaIcons;