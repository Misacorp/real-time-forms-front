import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: this.props.history,
      isAuthenticated: this.props.auth
    }
  }

  render() {
    return (
      <div>
        <Nav isAuthenticated={this.state.isAuthenticated} {...this.props} />
      </div>
    );
  }
}

export default App;
