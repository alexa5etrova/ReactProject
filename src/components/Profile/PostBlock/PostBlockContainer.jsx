import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import StoreContext from '../../../redux/StoreContext';
import PostBlock from './PostBlock';


const PostBlockContainer = (props) => {
    return <StoreContext.Consumer>
        {store =>{
            let state = store.getState();

            let addPost =()=>{
                store.dispatch(addPostActionCreator());
                
            }
            
            let onPostChange = (text) =>{
                store.dispatch(updateNewPostTextActionCreator(text));
            }
        
            return (
                <PostBlock
                addPost={addPost}
                updateNewPostText={onPostChange}
                posts={state.profilePage.postData}
                newPostText={state.profilePage.newPostText}/>
            )

        }}
    </StoreContext.Consumer>

    
        
}

export default PostBlockContainer;