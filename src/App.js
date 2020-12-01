import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import FindUsersContainer from './components/Users/FindUsersContainer';




const App = (props) => {
  
  return (
    
      <div className={s.appWrapper}>
        <Header />
     
        <Nav />
        <div className={s.content}>
          <Route path='/profile' render={() => <Profile />}  />
          <Route path='/dialogs' render={() => <DialogsContainer /> }  />
          <Route path='/users' render={()=> <FindUsersContainer /> } />
        </div>
      </div>
    
  );
}





export default App;
