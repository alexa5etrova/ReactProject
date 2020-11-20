import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import PostBlock from './PostBlock';


const PostBlockContainer = (props) => {

    let state = props.store.getState();

    let addPost =()=>{
        props.store.dispatch(addPostActionCreator());
        
    }
    
    let onPostChange = (text) =>{
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <PostBlock
        addPost={addPost}
        updateNewPostText={onPostChange}
        posts={state.profilePage.postData}
        newPostText={state.profilePage.newPostText}/>
    )
        
}

export default PostBlockContainer;