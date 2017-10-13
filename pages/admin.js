import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import Fork from '../components/Fork';
import Todo from '../components/Todo';

import initStore from '../utils/store';
import Auth from '../utils/auth.js';

const auth = new Auth();
auth.login();

class Admin extends React.Component {
  static async getInitialProps({ store }) {
    // Adding a default/initialState can be done as follows:
    // store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
    const res = await fetch(
      'https://api.github.com/repos/ooade/NextSimpleStarter'
    );
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    return (
      <div>
        <div>
          <Todo />
        </div>
        
        <script src="https://cdn.auth0.com/js/auth0/8.10.1/auth0.min.js"></script>
      </div>
    );
  }
}

export default withRedux(initStore)(Admin);
