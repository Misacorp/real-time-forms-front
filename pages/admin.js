import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import Fork from '../components/Fork';
import Todo from '../components/Todo';

import initStore from '../utils/store';
import Auth from '../utils/auth.js';

const auth = new Auth();

class Admin extends React.Component {
  static async getInitialProps({ store }) {
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  render() {
    return (
      <div>
        <div>
          <Button
            onClick={this.login.bind(this)}
          >
            Login
          </Button>
        </div>
        
        <script src="https://cdn.auth0.com/js/auth0/8.10.1/auth0.min.js"></script>
      </div>
    );
  }
}

export default withRedux(initStore)(Admin);
