'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _todo = require('../actions/todo');

var _TodoItem = require('./TodoItem');

var _TodoItem2 = _interopRequireDefault(_TodoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/var/www/real-time-forms/real-time-forms-front/components/Todo.js';


var Todo = function (_React$Component) {
	(0, _inherits3.default)(Todo, _React$Component);

	function Todo() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Todo);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Todo.__proto__ || (0, _getPrototypeOf2.default)(Todo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			text: ''
		}, _this.addTodos = function (e) {
			e.preventDefault();

			_this.props.addTodo(_this.state.text);
			_this.setState({ text: '' });
		}, _this.removeTodo = function (todo) {
			_this.props.removeTodo(todo);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Todo, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement('div', { className: 'mdl-card mdl-shadow--2dp', __source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}, _react2.default.createElement('form', { onSubmit: this.addTodos, __source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, _react2.default.createElement('div', { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label', __source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement('input', {
				type: 'text',
				value: this.state.text,
				onInput: function onInput(e) {
					return _this2.setState({ text: e.target.value });
				},
				className: 'mdl-textfield__input',
				id: 'input',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}), _react2.default.createElement('label', { className: 'mdl-textfield__label', htmlFor: 'input', __source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, 'What must be done?'))), _react2.default.createElement('ul', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, this.props.todos.map(function (todo, i) {
				return _react2.default.createElement(_TodoItem2.default, { key: i, todo: todo, remove: _this2.removeTodo, __source: {
						fileName: _jsxFileName,
						lineNumber: 43
					}
				});
			})), _react2.default.createElement('style', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, '\n\t\t\t\t\t\tform {\n\t\t\t\t\t\t\tbackground: #fff;\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul {\n\t\t\t\t\t\t\tmin-height: 100px;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\tlist-style: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul li {\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t\tbackground: #FFF;\n\t\t\t\t\t\t\tborder-bottom: 1px solid #EEE;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul li:nth-child(2n) {\n\t\t\t\t\t\t\tbackground: #EEF6FF;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul li:last-child {\n\t\t\t\t\t\t\tborder-bottom: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mdl-card {\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttransition: all .3s;\n\t\t\t\t\t\t\ttransform: translateY(100px);\n\t\t\t\t\t\t}\n\t\t\t\t\t'));
		}
	}]);

	return Todo;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (_ref2) {
	var todos = _ref2.todos;
	return { todos: todos };
}, { addTodo: _todo.addTodo, removeTodo: _todo.removeTodo })(Todo);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kby5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJhZGRUb2RvIiwicmVtb3ZlVG9kbyIsIlRvZG9JdGVtIiwiVG9kbyIsInN0YXRlIiwidGV4dCIsImFkZFRvZG9zIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJzZXRTdGF0ZSIsInRvZG8iLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvZG9zIiwibWFwIiwiaSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFFVCxBQUFTLEFBQVMsQUFBa0I7O0FBQ3BDLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7c01BQ0wsQTtTLEFBQVEsQUFDRDtBQURDLEFBQ1AsV0FHRCxBLFdBQVcsYUFBSyxBQUNmO0tBQUEsQUFBRSxBQUVGOztTQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsTUFBQSxBQUFLLE1BQXhCLEFBQThCLEFBQzlCO1NBQUEsQUFBSyxTQUFTLEVBQUUsTUFBaEIsQUFBYyxBQUFRLEFBQ3RCO0EsV0FFRCxBLGFBQWEsZ0JBQVEsQUFDcEI7U0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLEFBQ3RCO0E7Ozs7OzJCQUVRO2dCQUNSOzswQkFDQyxjQUFBLFNBQUssV0FBTCxBQUFlO2VBQWY7aUJBQUEsQUFDQztBQUREO0lBQUEsa0JBQ0MsY0FBQSxVQUFNLFVBQVUsS0FBaEIsQUFBcUI7ZUFBckI7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUEsU0FBSyxXQUFMLEFBQWU7ZUFBZjtpQkFBQSxBQUNDO0FBREQ7O1VBQ0MsQUFDTSxBQUNMO1dBQU8sS0FBQSxBQUFLLE1BRmIsQUFFbUIsQUFDbEI7YUFBUyxvQkFBQTtZQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUUsTUFBTSxFQUFBLEFBQUUsT0FBN0IsQUFBSyxBQUFjLEFBQWlCO0FBSDlDLEFBSUM7ZUFKRCxBQUlXLEFBQ1Y7UUFMRCxBQUtJOztlQUxKO2lCQURELEFBQ0MsQUFPQTtBQVBBO0FBQ0MsdUJBTUQsY0FBQSxXQUFPLFdBQVAsQUFBaUIsd0JBQXVCLFNBQXhDLEFBQWdEO2VBQWhEO2lCQUFBO0FBQUE7TUFWSCxBQUNDLEFBQ0MsQUFRQyxBQU1GLHlDQUFBLGNBQUE7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsV0FDRSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxHQUFQOzJCQUNyQixBQUFDLG9DQUFTLEtBQVYsQUFBZSxHQUFHLE1BQWxCLEFBQXdCLE1BQU0sUUFBUSxPQUF0QyxBQUEyQztnQkFBM0M7a0JBRHFCLEFBQ3JCO0FBQUE7S0FBQTtBQWxCSCxBQWdCQyxBQUNFLEFBSUYsd0JBQUEsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUF0QkYsQUFDQyxBQXFCQyxBQStCRjs7Ozs7RUF0RWlCLGdCLEFBQU0sQUF5RXpCOzsyQ0FBdUIsaUJBQUE7S0FBQSxBQUFHLGNBQUgsQUFBRztRQUFhLEVBQUUsT0FBbEIsQUFBZ0I7QUFBeEIsQ0FBQSxFQUFvQyxFQUFBLEFBQUUsd0JBQXRDLEFBQW9DLEFBQVcsZ0NBQTlELEFBQWUsQUFDZCIsImZpbGUiOiJUb2RvLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L3JlYWwtdGltZS1mb3Jtcy9yZWFsLXRpbWUtZm9ybXMtZnJvbnQifQ==