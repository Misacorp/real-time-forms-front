import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class KeyDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      api_key: this.props.api_key
    };
  }

  render() {
    const keyStyle = {
      fontFamily: 'monospace'
    }

    return (
      <div>
        { !!this.state.api_key ? 
          <Alert bsStyle="info">
            Your API key is: <strong style={keyStyle}>{this.state.api_key}</strong>
          </Alert>
          : null
        }
      </div>
    );
  }
}

export default KeyDisplay;
