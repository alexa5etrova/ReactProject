import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { downloadProfileInfo, receiveStatus, pushStatus} from './../../redux/profileReducer';
import Profile from './Profile';







class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 14103;
        }
        this.props.downloadProfileInfo(userId);
        this.props.receiveStatus(userId);
        
      
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
        status: state.profilePage.status
        
    }
   
};


export default compose(
    connect(mapStateToProps, {downloadProfileInfo, receiveStatus, pushStatus }),
    withRouter,
    withLoginRedirect
)(ProfileContainer)