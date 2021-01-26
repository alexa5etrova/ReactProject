import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './PostBlock.module.scss';
import Post from './Posts/Post';

const PostForm =(props)=>{
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={"textarea"}  placeholder={"Please enter here your post"}/>
            </div>

            <div>
                <button className={s.publishButton}> Publish</button>
            </div>
    </form>)
}

const PostReduxForm = reduxForm({form:'addPostForm'})(PostForm);


const PostBlock = (props) => {

    let posts = props.posts.map((p)=>(
        <Post message={p.message} likes={p.likes} />
    ));

   

    const onSubmit = (values)=>{
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsArea}>
            <h3>My posts</h3>
           <PostReduxForm onSubmit={onSubmit}/>

            <div className={s.posts}>
                { posts }
                
            </div>
        </div>
    );
}

export default PostBlock;