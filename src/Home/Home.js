import React, { Component } from 'react';
import Welcome from '../Components/Welcome';
import QuestionViewer from '../Components/QuestionViewer';
import QuestionCreator from '../Components/QuestionCreator';

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

    if(isAuthenticated()) {
      // Get profile from local storage
      let profile = JSON.parse(localStorage.getItem('user_profile'));
      if(typeof profile !== undefined && !!profile) {
        // Get user's given name
        username = this.getProperty(profile, 'given_name') || username;
        // Get user id
        user_id = this.getProperty(profile, 'user_id') || 'not set';
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
                <h2>Manage Forms</h2>
                <p>View your questions and create new ones.</p>
                <p>Your user id is: {user_id}</p>

                <QuestionViewer user={user_id} />
                <QuestionCreator user={user_id} />
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
