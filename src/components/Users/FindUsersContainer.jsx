import React from 'react';
import FindUsers from './FindUsersC';
import { userFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from '../../redux/userReducer';
import { connect } from 'react-redux';
import LoadingImg from '../commons/LoadingImg';
import { usersApi } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.toggleIsFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                });

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
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
                    userFollow={this.props.userFollow}
        
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

