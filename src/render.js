import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, updateNewPostText, updateNewMessageText, addMessage} from './redux/state';

export let renderEntireDoc = (state) => {
  ReactDOM.render( 
    <React.StrictMode>
    <App 
      state = {state} 
      addPost = {addPost} 
      updateNewPostText={updateNewPostText}
      updateNewMessageText={updateNewMessageText}
      addMessage={addMessage}
      /> </React.StrictMode>,
    document.getElementById('root')
  );
  
}


