import React from 'react';
import Header from './Header';
import { logoutUser} from './../../redux/authReducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
    
    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
    
});


export default connect(mapStateToProps, {logoutUser})(HeaderContainer);