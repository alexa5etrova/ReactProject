import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {downloadProfileInfo} from './../../redux/profileReducer';
import {  withRouter } from 'react-router-dom';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { compose } from 'redux';







class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }

        this.props.downloadProfileInfo(userId);
      
    }

    render() {
        

        return (
            <Profile {...this.props}/>

        );
    }

}


let mapStateToProps = (state) => {
    return{ 
        profile: state.profilePage.profile,
        
    }
   
};


export default compose(
    connect(mapStateToProps, {downloadProfileInfo}),
    withRouter,
    withLoginRedirect
)(ProfileContainer)