import React, { Component } from 'react';

class QuestionListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: this.props.content,
      id: this.props.id
    };
  }
  
  render() {
    return (
      <tr>
        <td>{this.state.id}</td>
        <td>{this.state.content}</td>
      </tr>
    );
  }
}

export default QuestionListItem;