import React from 'react';
import s from './PostBlock.module.scss';
import Post from './Posts/Post';


const PostBlock = () =>{
    return(
        <div className={s.postsArea}>
            <textarea></textarea>
            <button>Publish</button>
            <Post message="Finally, I've got a super rare gybrid" likes="45"/>
            <Post message="Hi, there" likes="15"/>
        </div>
    );
}

export default PostBlock;