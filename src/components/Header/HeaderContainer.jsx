import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {setUserAuth} from './../../redux/authReducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
    componentDidMount(){
        axios
        .get(`https://social-network.samuraijs.com/api/1.1/auth/me`, {
            withCredentials: true
        })
        .then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                this.props.setUserAuth(id, email, login);
            }
            
            
        });


    }

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
    
});


export default connect(mapStateToProps, {setUserAuth})(HeaderContainer);