'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('isomorphic-fetch');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Fork = require('../components/Fork');

var _Fork2 = _interopRequireDefault(_Fork);

var _Todo = require('../components/Todo');

var _Todo2 = _interopRequireDefault(_Todo);

var _store = require('../utils/store');

var _store2 = _interopRequireDefault(_store);

var _auth = require('../utils/auth.js');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/var/www/real-time-forms/real-time-forms-front/pages/admin.js?entry';


var auth = new _auth2.default();

var Admin = function (_React$Component) {
  (0, _inherits3.default)(Admin, _React$Component);

  function Admin() {
    (0, _classCallCheck3.default)(this, Admin);

    return (0, _possibleConstructorReturn3.default)(this, (Admin.__proto__ || (0, _getPrototypeOf2.default)(Admin)).apply(this, arguments));
  }

  (0, _createClass3.default)(Admin, [{
    key: 'goTo',
    value: function goTo(route) {
      this.props.history.replace('/' + route);
    }
  }, {
    key: 'login',
    value: function login() {
      this.props.auth.login();
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.props.auth.logout();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(Button, {
        onClick: this.login.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Login')), _react2.default.createElement('script', { src: 'https://cdn.auth0.com/js/auth0/8.10.1/auth0.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var store = _ref.store;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Admin;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(Admin);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aFJlZHV4IiwiRm9yayIsIlRvZG8iLCJpbml0U3RvcmUiLCJBdXRoIiwiYXV0aCIsIkFkbWluIiwicm91dGUiLCJwcm9wcyIsImhpc3RvcnkiLCJyZXBsYWNlIiwibG9naW4iLCJsb2dvdXQiLCJiaW5kIiwic3RvcmUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCLElBQU0sT0FBTixBQUFhLEFBQUk7O0ksQUFFWDs7Ozs7Ozs7Ozs7eUIsQUFJQyxPQUFPLEFBQ1Y7V0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLGNBQW5CLEFBQStCLEFBQ2hDOzs7OzRCQUVPLEFBQ047V0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLEFBQ2pCOzs7OzZCQUVRLEFBQ1A7V0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLEFBQ2pCOzs7OzZCQUdRLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEO2lCQUNXLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FEdEIsQUFDVyxBQUFnQjs7b0JBRDNCO3NCQUFBO0FBQUE7QUFDRSxTQUhOLEFBQ0UsQUFDRSxBQU9GLHFEQUFRLEtBQVIsQUFBWTtvQkFBWjtzQkFWSixBQUNFLEFBU0UsQUFHTDtBQUhLOzs7Ozs7O1ksQUEzQnlCLGFBQUEsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRGIsZ0JBQU0sQUFrQzFCLEE7O2tCQUFlLEFBQVUsaURBQXpCLEFBQWUsQUFBcUIiLCJmaWxlIjoiYWRtaW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvcmVhbC10aW1lLWZvcm1zL3JlYWwtdGltZS1mb3Jtcy1mcm9udCJ9