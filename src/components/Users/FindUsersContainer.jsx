import React from 'react';
import FindUsers from './FindUsersC';
import { userFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from '../../redux/userReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';

class UsersContainer extends React.Component {
    componentDidMount(){
        axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });


    }
    render() {
        return <FindUsers 
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    toggleFollow={this.props.toggleFollow}
        
        />
        
    }


}




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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

