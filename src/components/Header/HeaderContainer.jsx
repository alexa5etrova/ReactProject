import React from 'react';
import Header from './Header';
import {confirmAuth, logoutUser} from './../../redux/authReducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.confirmAuth()
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
    
});


export default connect(mapStateToProps, {confirmAuth, logoutUser})(HeaderContainer);