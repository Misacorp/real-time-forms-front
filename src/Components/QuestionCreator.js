import React, { Component } from 'react';
import { Alert, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import axios from 'axios';

class QuestionCreator extends Component {
  constructor() {
    super();
    this.state = { 
      value: '',
      created_id: ''
    };
  }

  createQuestion() {
    // Initialize Axios for API requests
    const comms = axios.create({
      baseURL: 'http://realtimeforms.local:1337/api',
      timeout: '15000',
      headers: {
        'Authorization': `apikey=${this.props.api_key}` 
      }
    });

    // Post new question to API
    let payload = {
      content: this.state.value
    };
    comms.post('/question', payload)
      .then((res) => {
        this.setState({ created_id: res.data.id });
      })
      .catch((err) => {
        console.log("Error posting data:");
        console.error(err);
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
      <div>
        <h2>Create Question</h2>
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
            <HelpBlock>AnID will be returned when a question has been created successfully. Use this ID for sending and retrieving responses.</HelpBlock>
            <Button 
              onClick={this.createQuestion.bind(this)}
            >
              Submit
            </Button>
          </FormGroup>
        </form>

        { this.state.created_id > 0 ? 
          <Alert bsStyle="info">
            Question created with id: <strong>{this.state.created_id}</strong>
          </Alert>
          : null
        }
      </div>
    );
  }
}

export default QuestionCreator;
