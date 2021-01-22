import React from 'react';


class Status extends React.Component {
    constructor(props){
        super(props);
        this.openEditMode = this.openEditMode.bind(this);
        this.closeEditMode = this.closeEditMode.bind(this);
        this.state = {
            editMode: false,
            status: this.props.status
    }
    }

    

    openEditMode(){
        this.setState({
            editMode: true
        })
    }
    closeEditMode(){
        this.setState({
            editMode: false
        })
        this.props.pushStatus(this.state.status)
    }

    onStatusChange = (e)=>{
        this.setState({
            status: e.currentTarget.value,
        });

    }

    
    

    render(){
        return (
        <div>
            {!this.state.editMode
            ? <div onDoubleClick={this.openEditMode}>{this.props.status || '----'}</div>
            : <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.closeEditMode} value={this.state.status}/>
            }


        </div>
        )

    }
}



export default Status;