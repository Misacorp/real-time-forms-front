import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class QuestionViewer extends Component {
  getQuestions() {
    const user_id = this.props.user;

    // Initialize Axios for API requests
    const comms = axios.create({
      baseURL: 'http://realtimeforms.local:1337/api',
      timeout: '15000',
      headers: {
        'Authorization': `apikey=${user_id}` 
      }
    })

    console.log(`Getting questions for ${user_id}`);

    // Get questions from API
    comms.get('/question')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error fetching data.");
      });
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          className="btn-margin"
          onClick={this.getQuestions.bind(this)}
        >
          Find my questions
        </Button>
      </div>
    );
  }
}

export default QuestionViewer;
