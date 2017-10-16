import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import QuestionList from '../Components/QuestionList';
import axios from 'axios';

class QuestionViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: []
    };
  }

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

    // Get questions from API
    comms.get('/question')
      .then((res) => {
        this.setState({
          data: res.data
        })
      })
      .catch((err) => {
        console.log("Error fetching data:");
        console.log(err);
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
        <QuestionList data={this.state.data} />
      </div>
    );
  }
}

export default QuestionViewer;
