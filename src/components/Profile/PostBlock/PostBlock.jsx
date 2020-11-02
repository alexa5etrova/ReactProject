import React from 'react';
import s from './PostBlock.module.scss';
import Post from './Posts/Post';


const PostBlock = () => {

    const postData =[
        {id: 1, message:"Finally, I've got a super rare gybrid", likes: "45"},
        {id: 2, message:"Hi, there", likes: "5"}
    ];
    const posts = postData.map((p)=>(
        <Post message={p.message} likes={p.likes} />
    ))

    return (
        <div className={s.postsArea}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>

            <div>
                <button>Publish</button>
            </div>
            <div className={s.posts}>
                { posts }
                
            </div>
        </div>
    );
}

export default PostBlock;