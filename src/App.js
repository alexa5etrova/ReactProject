import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';




const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>

        <Header />
     
        <Nav />
        <div className={s.content}>
          <Route component={Profile} path='/profile'/>
          <Route component={Dialogs} path='/dialogs'/>
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
