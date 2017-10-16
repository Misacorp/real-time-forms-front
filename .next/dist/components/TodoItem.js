'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/var/www/real-time-forms/real-time-forms-front/components/TodoItem.js';

exports.default = function (_ref) {
	var todo = _ref.todo,
	    remove = _ref.remove;

	return _react2.default.createElement('li', { style: { listStyle: 'none' }, __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement('button', {
		className: 'mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect',
		onClick: function onClick(_) {
			return remove(todo);
		},
		style: { fontSize: 12 },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, 'x'), ' ', ' ', ' ', todo.text);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kb0l0ZW0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ0b2RvIiwicmVtb3ZlIiwibGlzdFN0eWxlIiwiZm9udFNpemUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLGdCQUFzQjtLQUFuQixBQUFtQixZQUFuQixBQUFtQjtLQUFiLEFBQWEsY0FBYixBQUFhLEFBQ3BDOzt3QkFDQyxjQUFBLFFBQUksT0FBTyxFQUFFLFdBQWIsQUFBVyxBQUFhO2FBQXhCO2VBQUEsQUFDQztBQUREO0VBQUEsa0JBQ0MsY0FBQTthQUFBLEFBQ1csQUFDVjtXQUFTLG9CQUFBO1VBQUssT0FBTCxBQUFLLEFBQU87QUFGdEIsQUFHQztTQUFPLEVBQUUsVUFIVixBQUdRLEFBQVk7O2FBSHBCO2VBQUE7QUFBQTtBQUNDLElBRkYsQUFDQyxNQU1XLEtBUFosS0FPa0IsVUFSbkIsQUFDQyxBQU91QixBQUd4QjtBQVpEIiwiZmlsZSI6IlRvZG9JdGVtLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L3JlYWwtdGltZS1mb3Jtcy9yZWFsLXRpbWUtZm9ybXMtZnJvbnQifQ==