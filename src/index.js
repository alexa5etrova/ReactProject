
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './redux/StoreContext';


let renderEntireDoc = (state) => {
    ReactDOM.render( 
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </BrowserRouter>, document.getElementById('root')
    );
    
  }
  

renderEntireDoc(store.getState());

store.subscribe(()=>{
  renderEntireDoc(store.getState())
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();