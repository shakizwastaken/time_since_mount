import React, { Component } from 'react';
import Profile from './components/Profile.jsx';

import './App.css';

class App extends Component {
  
  state = { 
    person:{
      fullName:"Yahya Rhemmali",
      bio:"Minecraft best game ww.", 
      imgSrc:"./images/sss.jpg", 
      profession:"Professional minecraft player.",
      hidden:false
    }
  }



  render() { 
    return (
      <div className="App">
            
        <Profile {...this.state.person}>
        
          <img src={this.state.person.imgSrc} alt="failed to load profile" />

        </Profile>

      </div>
    );
  }
}

export default App;
