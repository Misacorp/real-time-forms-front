import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import styles from './QuestionList.css.js';
import QuestionListItem from './QuestionListItem';

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: this.props.data
    };
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }


  createListItem({id, content}) {
    return <QuestionListItem key={id} id={id} content={content} />
  }


  createListItems(data) {
    return data.map(this.createListItem);
  }

  
  render() {
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th style={styles.firstColumn}>id</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {this.createListItems(this.state.data)}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default QuestionList;