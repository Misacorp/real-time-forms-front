import React, { Component } from 'react';
import QuestionViewer from '../Components/QuestionViewer';
import QuestionCreator from '../Components/QuestionCreator';
import Keygen from '../Utils/Keygen'

class Questions extends Component {
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
    
    let user_id = '';
    let api_key = '';

    if(isAuthenticated()) {
      // Get profile from local storage
      let profile = JSON.parse(localStorage.getItem('user_profile'));
      if(typeof profile !== undefined && !!profile) {
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
                <h1>Manage Questions</h1>
                <p>View your questions and create new ones.</p>

                <QuestionCreator api_key={api_key} />
                <hr/>
                <QuestionViewer api_key={api_key} />
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

export default Questions;
