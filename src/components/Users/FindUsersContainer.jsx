import React from 'react';
import FindUsers from './FindUsers';
import { setCurrentPage, getUsers, doUnfollowUser, doFollowUser } from '../../redux/userReducer';
import { connect } from 'react-redux';
import LoadingImg from '../commons/LoadingImg';
import { compose } from 'redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);


    }
    render() {
        return <>
            <div>{this.props.isFetching ? <LoadingImg /> : <FindUsers
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                doUnfollowUser={this.props.doUnfollowUser}
                doFollowUser={this.props.doFollowUser}

            />}</div>


        </>
    }


}




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.userData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }

}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers,
        doUnfollowUser,
        doFollowUser
    }),
    // withLoginRedirect
    )(UsersContainer);

