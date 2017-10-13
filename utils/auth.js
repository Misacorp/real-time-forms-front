// utils/auth.js

import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'misacorp.eu.auth0.com',
    clientID: 'jIvvB1A3jsQgHcazVwINXgpS7Q9Wc3sq',
    redirectUri: 'http://realtimeforms.local:3000',
    audience: 'https://misacorp.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}