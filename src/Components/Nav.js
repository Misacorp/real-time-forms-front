import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

class Nav extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  isAuthenticated() {
    console.log(this.props.isAuthenticated);
    return this.props.isAuthenticated;
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Real Time Forms</a>
          </Navbar.Brand>
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.goTo.bind(this, 'home')}
          >
            Home
          </Button>
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.goTo.bind(this, 'questions')}
          >
            Questions
          </Button>
          {
            !isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </Button>
              )
          }
          {
            isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </Button>
              )
          }
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default Nav;