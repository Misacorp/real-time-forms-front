'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];
	var type = action.type,
	    text = action.text,
	    todo = action.todo;

	switch (type) {
		case _actions.ADD_TODO:
			return [].concat((0, _toConsumableArray3.default)(state), [{
				id: Math.random().toString(36).substring(2),
				text: text
			}]);
		case _actions.REMOVE_TODO:
			return state.filter(function (i) {
				return i !== todo;
			});
		default:
			return state;
	}
};

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3RvZG9zLmpzIl0sIm5hbWVzIjpbIkFERF9UT0RPIiwiUkVNT1ZFX1RPRE8iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0ZXh0IiwidG9kbyIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiZmlsdGVyIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUVlLFlBQTZCO0tBQXBCLEFBQW9CLDRFQUFaLEFBQVk7S0FBUixBQUFRLG1CQUFBO0tBQUEsQUFDbkMsT0FEbUMsQUFDZCxPQURjLEFBQ25DO0tBRG1DLEFBQzdCLE9BRDZCLEFBQ2QsT0FEYyxBQUM3QjtLQUQ2QixBQUN2QixPQUR1QixBQUNkLE9BRGMsQUFDdkIsQUFFcEI7O1NBQUEsQUFBUSxBQUNQO0FBQUEsQUFBSyxBQUNKO3FEQUFBLEFBQ0k7UUFFRSxLQUFBLEFBQUssU0FBTCxBQUFjLFNBQWQsQUFBdUIsSUFBdkIsQUFBMkIsVUFEaEMsQUFDSyxBQUFxQyxBQUN6QztVQUpGLEFBRUMsQUFLRjtBQUxFLEFBQ0M7QUFJSCxBQUFLLEFBQ0o7Z0JBQU8sQUFBTSxPQUFPLGFBQUE7V0FBSyxNQUFMLEFBQVc7QUFBL0IsQUFBTyxBQUNSLElBRFE7QUFFUDtVQVpGLEFBWUUsQUFBTyxBQUVUOzs7Ozs7OztBQW5CRCxBQUFTLEFBQVUsQUFBbUIsQUFFdEMiLCJmaWxlIjoidG9kb3MuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvcmVhbC10aW1lLWZvcm1zL3JlYWwtdGltZS1mb3Jtcy1mcm9udCJ9