import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import FindUsersContainer from './components/Users/FindUsersContainer';




const App = (props) => {
  
  return (
    
      <div className={s.appWrapper}>
        <HeaderContainer />
     
        <Nav />
        <div className={s.content}>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />}  />
          <Route path='/dialogs' render={() => <DialogsContainer /> }  />
          <Route path='/users' render={()=> <FindUsersContainer /> } />
        </div>
      </div>
    
  );
}





export default App;
