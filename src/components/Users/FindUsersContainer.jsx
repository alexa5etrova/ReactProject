import React from 'react';
import FindUsers from './FindUsers';
import { setCurrentPage, requestUsers, doUnfollowUser, doFollowUser } from '../../redux/userReducer';
import { connect } from 'react-redux';
import LoadingImg from '../commons/LoadingImg';
import { compose } from 'redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getFetchingStatus, getProgressStatus } from '../../redux/userSelectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);


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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetchingStatus(state),
        followingInProgress: getProgressStatus(state)

    }

}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        requestUsers,
        doUnfollowUser,
        doFollowUser
    }),
    withLoginRedirect
    )(UsersContainer);

