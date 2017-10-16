'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _auth0Js = require('auth0-js');

var _auth0Js2 = _interopRequireDefault(_auth0Js);

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// utils/auth.js

var Auth = function () {

  // ...
  function Auth() {
    (0, _classCallCheck3.default)(this, Auth);

    this.auth0 = new _auth0Js2.default.WebAuth({
      domain: 'misacorp.eu.auth0.com',
      clientID: 'jIvvB1A3jsQgHcazVwINXgpS7Q9Wc3sq',
      redirectUri: 'http://realtimeforms.local:3000',
      audience: 'https://misacorp.eu.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  (0, _createClass3.default)(Auth, [{
    key: 'login',
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: 'handleAuthentication',
    value: function handleAuthentication() {
      var _this = this;

      this.auth0.parseHash(function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this.setSession(authResult);
          _history2.default.replace('/home');
        } else if (err) {
          _history2.default.replace('/home');
          console.log(err);
        }
      });
    }
  }, {
    key: 'setSession',
    value: function setSession(authResult) {
      // Set the time that the access token will expire at
      var expiresAt = (0, _stringify2.default)(authResult.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      _history2.default.replace('/home');
    }
  }, {
    key: 'logout',
    value: function logout() {
      // Clear access token and ID token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      // navigate to the home route
      _history2.default.replace('/home');
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      // Check whether the current time is past the 
      // access token's expiry time
      var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
  }]);

  return Auth;
}();

exports.default = Auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2F1dGguanMiXSwibmFtZXMiOlsiYXV0aDAiLCJoaXN0b3J5IiwiQXV0aCIsIldlYkF1dGgiLCJkb21haW4iLCJjbGllbnRJRCIsInJlZGlyZWN0VXJpIiwiYXVkaWVuY2UiLCJyZXNwb25zZVR5cGUiLCJzY29wZSIsImxvZ2luIiwiYmluZCIsImxvZ291dCIsImhhbmRsZUF1dGhlbnRpY2F0aW9uIiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aG9yaXplIiwicGFyc2VIYXNoIiwiZXJyIiwiYXV0aFJlc3VsdCIsImFjY2Vzc1Rva2VuIiwiaWRUb2tlbiIsInNldFNlc3Npb24iLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsImV4cGlyZXNBdCIsImV4cGlyZXNJbiIsIkRhdGUiLCJnZXRUaW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFhOzs7Ozs7QUFIcEI7O0lBS3FCLEEsbUJBVW5COztBQUNBO2tCQUFjO3dDQUFBOztTQVZkLEFBVWMsWUFWRixrQkFBSixBQUFVO2NBQVEsQUFDaEIsQUFDUjtnQkFGd0IsQUFFZCxBQUNWO21CQUh3QixBQUdYLEFBQ2I7Z0JBSndCLEFBSWQsQUFDVjtvQkFMd0IsQUFLVixBQUNkO2FBTk0sQUFBa0IsQUFNakIsQUFJSyxBQUNaO0FBWHdCLEFBQ3hCLEtBRE07O1NBV04sQUFBSyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBeEIsQUFBYSxBQUFnQixBQUM3QjtTQUFBLEFBQUssU0FBUyxLQUFBLEFBQUssT0FBTCxBQUFZLEtBQTFCLEFBQWMsQUFBaUIsQUFDL0I7U0FBQSxBQUFLLHVCQUF1QixLQUFBLEFBQUsscUJBQUwsQUFBMEIsS0FBdEQsQUFBNEIsQUFBK0IsQUFDM0Q7U0FBQSxBQUFLLGtCQUFrQixLQUFBLEFBQUssZ0JBQUwsQUFBcUIsS0FBNUMsQUFBdUIsQUFBMEIsQUFDbEQ7Ozs7OzRCQUVPLEFBQ047V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7OzJDQUVzQjtrQkFDckI7O1dBQUEsQUFBSyxNQUFMLEFBQVcsVUFBVSxVQUFBLEFBQUMsS0FBRCxBQUFNLFlBQWUsQUFDeEM7WUFBSSxjQUFjLFdBQWQsQUFBeUIsZUFBZSxXQUE1QyxBQUF1RCxTQUFTLEFBQzlEO2dCQUFBLEFBQUssV0FBTCxBQUFnQixBQUNoQjs0QkFBQSxBQUFRLFFBQVIsQUFBZ0IsQUFDakI7QUFIRCxlQUdPLElBQUEsQUFBSSxLQUFLLEFBQ2Q7NEJBQUEsQUFBUSxRQUFSLEFBQWdCLEFBQ2hCO2tCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFDRjtBQVJELEFBU0Q7Ozs7K0JBRVUsQSxZQUFZLEFBQ3JCO0FBQ0E7VUFBSSxZQUFZLHlCQUFnQixXQUFBLEFBQVcsWUFBWixBQUF3QixPQUFRLElBQUEsQUFBSSxPQUFuRSxBQUFnQixBQUErQyxBQUFXLEFBQzFFO21CQUFBLEFBQWEsUUFBYixBQUFxQixnQkFBZ0IsV0FBckMsQUFBZ0QsQUFDaEQ7bUJBQUEsQUFBYSxRQUFiLEFBQXFCLFlBQVksV0FBakMsQUFBNEMsQUFDNUM7bUJBQUEsQUFBYSxRQUFiLEFBQXFCLGNBQXJCLEFBQW1DLEFBQ25DO0FBQ0E7d0JBQUEsQUFBUSxRQUFSLEFBQWdCLEFBQ2pCOzs7OzZCQUVRLEFBQ1A7QUFDQTttQkFBQSxBQUFhLFdBQWIsQUFBd0IsQUFDeEI7bUJBQUEsQUFBYSxXQUFiLEFBQXdCLEFBQ3hCO21CQUFBLEFBQWEsV0FBYixBQUF3QixBQUN4QjtBQUNBO3dCQUFBLEFBQVEsUUFBUixBQUFnQixBQUNqQjs7OztzQ0FFaUIsQUFDaEI7QUFDQTtBQUNBO1VBQUksWUFBWSxLQUFBLEFBQUssTUFBTSxhQUFBLEFBQWEsUUFBeEMsQUFBZ0IsQUFBVyxBQUFxQixBQUNoRDthQUFPLElBQUEsQUFBSSxPQUFKLEFBQVcsWUFBbEIsQUFBOEIsQUFDL0I7Ozs7Ozs7a0JBMURrQixBIiwiZmlsZSI6ImF1dGguanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvcmVhbC10aW1lLWZvcm1zL3JlYWwtdGltZS1mb3Jtcy1mcm9udCJ9