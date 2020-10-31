import React from 'react';
import s from './Post.module.scss';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSflU-9SffPbKOHWjSS4TdVfoDIfFyo812YOA&usqp=CAU' alt="cactus-cartoon" />
            {props.message}
            <div>
                <span className={s.like}>Like</span>
                <span className='likesCounter'>{props.likes}</span>
            </div>
        </div>
    )
}

export default Post;