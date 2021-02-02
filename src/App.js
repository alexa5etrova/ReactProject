import React from 'react';
import { connect } from 'react-redux';
import {  Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import s from './App.module.scss';
import LoadingImg from './components/commons/LoadingImg';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import FindUsersContainer from './components/Users/FindUsersContainer';
import { initializeApp } from './redux/appReducer';





class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
    
  }

  render(){
    if(!this.props.initionalized){
      return <LoadingImg/>
  }

  return (

  <div className={s.appWrapper}>
    <HeaderContainer />
  
    <Nav />
    <div className={s.content}>
      <Route path='/profile/:userId?' render={() => <ProfileContainer />}  />
      <Route path='/dialogs' render={() => <DialogsContainer /> }  />
      <Route path='/users' render={()=> <FindUsersContainer /> } />
      <Route path='/login' render={()=> <Login /> } />
    </div>
  </div>



);
  }
}

const mapStateToProps =(state)=>({
  initionalized: state.app.initionalized
})



export default compose (connect(mapStateToProps, {initializeApp}),
  withRouter)(App);
