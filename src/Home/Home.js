import React, { Component } from 'react';
import Welcome from '../Components/Welcome';

class Home extends Component {
  login() {
    this.props.auth.login();
  }

  getProperty(obj, property) {
    // Return properties prefixed by custom namespace.
    const namespace = 'https://realtimeforms.com/';
    return obj[namespace + property];
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    let username = 'there';

    if(isAuthenticated()) {
      // Get profile from local storage
      let profile = JSON.parse(localStorage.getItem('user_profile'));
      if(typeof profile !== undefined && !!profile) {
        // Get user's given name
        username = this.getProperty(profile, 'given_name') || username;
      }
      else {
        console.log("User profile has not been set.");
      }
    }
    else {
      console.log("User is not authenticated.");
    }

    return (
      <div className="container">
        {
          isAuthenticated() && (
              <div>
                <Welcome name={username}/>
                <h1>Real Time Forms</h1>
                <p>This is your control panel. Go ahead and click 'Questions' in the above menu.</p>
              </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;