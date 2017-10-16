import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
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
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange.bind(this)}
            onClick={this.createQuestion.bind(this)}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default QuestionCreator;
