import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import PostBlock from './PostBlock';



let mapStateToProps =(state)=>{
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}



const PostBlockContainer = connect(mapStateToProps, {addPost})(PostBlock);

export default PostBlockContainer;