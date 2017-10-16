import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import axios from 'axios';

class QuestionCreator extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  createQuestion() {
    const user_id = this.props.user;

    // Initialize Axios for API requests
    const comms = axios.create({
      baseURL: 'http://realtimeforms.local:1337/api',
      timeout: '15000',
      headers: {
        'Authorization': `apikey=${user_id}` 
      }
    });

    // Post new question to API
    comms.post('/question', {
        content: this.state.value
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error fetching data.");
      });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Create a new question</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="What would you like to know?"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl.Feedback />
          <HelpBlock>An ID will be returned when a question has been created successfully. Use this ID for sending and retrieving responses.</HelpBlock>
          <Button 
            onClick={this.createQuestion.bind(this)}
          >
            Submit
          </Button>
        </FormGroup>
      </form>
    );
  }
}

export default QuestionCreator;
