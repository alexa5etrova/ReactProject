import React from 'react';
import { connect, Provider } from 'react-redux';
import {  BrowserRouter, Redirect, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import s from './App.module.scss';
import LoadingImg from './components/commons/LoadingImg';
import HeaderContainer from './components/Header/HeaderContainer';

import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import { withSuspence } from './hoc/withSuspence';
import { initializeApp } from './redux/appReducer';
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const FindUsersContainer = React.lazy(() => import ('./components/Users/FindUsersContainer'));
const Login = React.lazy(()=> import ('./components/Login/Login'));

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
      <Redirect to={'/profile'}/>
      <Route path='/profile/:userId?' render={() => <ProfileContainer />}  />
      <Route path='/dialogs' render={withSuspence(DialogsContainer)}  />
      <Route path='/users' render={withSuspence(FindUsersContainer)} />
      <Route path='/login' render={withSuspence(Login)} />
          
    </div>
  </div>



);
  }
}

const mapStateToProps =(state)=>({
  initionalized: state.app.initionalized
})



const AppContainer =  compose (connect(mapStateToProps, {initializeApp}),
  withRouter)(App);

const EcheveriaApp = (props) =>{
return <BrowserRouter> 
      <Provider store={store}>
          <AppContainer />
      </Provider>
  </BrowserRouter>
};


export default EcheveriaApp;
  