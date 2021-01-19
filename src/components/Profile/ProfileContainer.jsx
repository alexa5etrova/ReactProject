import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileApi } from '../../api/api';






class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }

        profileApi.getProfileInfo(userId)
            .then(data => {
            this.props.setUserProfile(data);
            
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>

        );
    }

}


let mapStateToProps = (state) => {
    return{ 
        profile: state.profilePage.profile
    }
   
};


let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer);