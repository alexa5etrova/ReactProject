import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import PostBlock from './PostBlock';



let mapStateToProps =(state)=>{
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps =(dispatch)=>{
    return {
        updateNewPostText: (text)=>{
            let action= updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: ()=>{
            dispatch(addPostActionCreator());
        }
    }
}


const PostBlockContainer = connect(mapStateToProps, mapDispatchToProps)(PostBlock);

export default PostBlockContainer;