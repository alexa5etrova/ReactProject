import React from 'react';
import s from './PostBlock.module.scss';
import Post from './Posts/Post';



const PostBlock = (props) => {

    let posts = props.posts.map((p)=>(
        <Post message={p.message} likes={p.likes} />
    ));

    let newPostElement = React.createRef();


    let addPost =()=>{
        props.addPost();
        
    }
    
    let onPostChange = () =>{
        let text =newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsArea}>
            <h3>My posts</h3>
            <div>
                <textarea  
                    onChange={onPostChange}
                    ref={newPostElement} 
                    value = {props.newPostText}
                    />
            </div>

            <div>
                <button onClick={addPost}> Publish</button>
            </div>
            <div className={s.posts}>
                { posts }
                
            </div>
        </div>
    );
}

export default PostBlock;