import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';




const App = (props) => {
  
  return (
    
      <div className={s.appWrapper}>

        <Header />
     
        <Nav />
        <div className={s.content}>
          <Route render={() => <Profile />} path='/profile'/>
          <Route render={() => <DialogsContainer /> } path='/dialogs'/>
        </div>
      </div>
    
  );
}





export default App;
