import React from 'react';
import FindUsers from './FindUsersC';
import { userFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from '../../redux/userReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import LoadingImg from '../commons/LoadingImg';

class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false);;
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });


    }
    render() {
        return <>
        <div>{ this.props.isFetching ? <LoadingImg /> : <FindUsers 
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    toggleFollow={this.props.userFollow}
        
        /> }</div>

        
        </>
    }


}




let mapStateToProps = (state)=>{
    return {
        users: state.usersPage.userData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}

// let mapDispatchToProps = (dispatch)=>{
//     return {
//         toggleFollow: (userId) =>{
//             dispatch(userFollowAC(userId));
//         },
//         setUsers: (users) =>{
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) =>{
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (count) =>{
//             dispatch(setTotalUsersCountAC(count));
//         },
//         toggleIsFetching: (fetching) => {
//             dispatch(toggleIsFetchingAC(fetching));
//         }
//     }

// }

export default connect(mapStateToProps, {
    userFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);

