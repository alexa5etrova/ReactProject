import React from 'react';
import FindUsers from './FindUsersC';
import { userFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from '../../redux/userReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state)=>{
    return {
        users: state.usersPage.userData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }

}

let mapDispatchToProps = (dispatch)=>{
    return {
        toggleFollow: (userId) =>{
            dispatch(userFollowAC(userId));
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) =>{
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (count) =>{
            dispatch(setTotalUsersCountAC(count));
        }
    }

}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;