import React, { Component} from 'react';
import './Profile.css';

class Profile extends Component {

    state = { 
        hidden : false,
        mountTime: 0
    } 
 
    toggleHidden = ()=>{
        this.setState({ 
            hidden : !this.state.hidden
        });
    }

    componentDidMount (){
        this.mountDate = new Date();
        setInterval(this.updateTimeSinceMount,100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateTimeSinceMount=()=> {

        let endDate   = new Date();
        let seconds = (endDate.getTime() - this.mountDate.getTime()) / 1000;

        this.setState({
            mountTime : Math.round(seconds)
        });
    }

    renderProfile(){
        return (
        <div className='profile-container'>
            
                <div className='pfp'>
                    {this.props.children}
                </div>

                <div>
                    <h1>{this.props.fullName}</h1>
                    <p>{this.props.bio}</p>
                </div>
        </div>);
    }

    render() { 
        return (
            <>
               {this.state.hidden?this.renderProfile():<h1>look right there --></h1>}

               <button id='toggle' onClick={this.toggleHidden} >
                    Toggle Profile
                </button>

                <h4 id='mountTimer' >Time since mount : {this.state.mountTime} seconds </h4>
            </>
        );
    }
}

export default Profile;