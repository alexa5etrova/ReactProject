import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../../commons/utils/FormControls';
import { maxLength, required } from '../../commons/utils/Validators/FormValidators';
import s from './PostBlock.module.scss';
import Post from './Posts/Post';

let maxLength10 = maxLength(10);

const PostForm =(props)=>{
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10]} name={'newPostText'} component={TextArea}  placeholder={"Please enter here your post"}/>
            </div>

            <div>
                <button className={s.publishButton}> Publish</button>
            </div>
    </form>)
}

const PostReduxForm = reduxForm({form:'addPostForm'})(PostForm);


const PostBlock = (props) => {

    let posts = props.posts.map((p)=>(
        <Post key={p.id} message={p.message} likes={p.likes} />
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