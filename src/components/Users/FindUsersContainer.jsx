import React from 'react';
import FindUsers from './FindUsers';
import { userFollowAC, setUsersAC} from '../../redux/userReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state)=>{
    return {
        users: state.usersPage.userData
    }

}

let mapDispatchToProps = (dispatch)=>{
    return {
        toggleFollow: (userId) =>{
            dispatch(userFollowAC(userId));
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users));
        }
    }

}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;