import React, { Component } from 'react';
import Welcome from '../Components/Welcome';
import KeyDisplay from '../Components/KeyDisplay';
import Keygen from '../Utils/Keygen'

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
    let user_id = '';
    let api_key = '';

    if(isAuthenticated()) {
      // Get profile from local storage
      let profile = JSON.parse(localStorage.getItem('user_profile'));
      if(typeof profile !== undefined && !!profile) {
        // Get user's given name
        username = this.getProperty(profile, 'given_name') || username;
        // Get user id
        user_id = this.getProperty(profile, 'user_id') || 'not set';
        api_key = Keygen.encodeKey(user_id);
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
                <KeyDisplay api_key={api_key} />
                <p>When performing requests to the Real Time Forms API, always include your API key in the <strong>Authorization</strong> header.</p>
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
