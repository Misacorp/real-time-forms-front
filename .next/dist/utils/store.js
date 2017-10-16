'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isClient = typeof window !== 'undefined';

var enhancers = (0, _redux.compose)(typeof window !== 'undefined' && process.env.NODE_ENV !== 'production' ? window.devToolsExtension && window.devToolsExtension() : function (f) {
	return f;
});

var createStoreWithMiddleware = (0, _redux.applyMiddleware)()(_redux.createStore);

exports.default = function (initialState) {
	return createStoreWithMiddleware(_reducers2.default, initialState, enhancers);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInJvb3RSZWR1Y2VyIiwiaXNDbGllbnQiLCJ3aW5kb3ciLCJlbmhhbmNlcnMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlIiwiaW5pdGlhbFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTLEFBQWEsQUFBUzs7QUFFL0IsQUFBTyxBQUFpQjs7Ozs7O0FBRXhCLElBQU0sV0FBVyxPQUFBLEFBQU8sV0FBeEIsQUFBbUM7O0FBRW5DLElBQU0sZ0NBQ0wsT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxRQUFBLEFBQVEsSUFBUixBQUFZLGFBQTdDLEFBQTBELGVBQ3ZELE9BQUEsQUFBTyxxQkFBcUIsT0FEL0IsQUFDK0IsQUFBTyxzQkFDbkMsYUFBQTtRQUFBLEFBQUs7QUFIVCxBQUFrQixDQUFBOztBQU1sQixJQUFNLDRCQUFOLEFBQWtDLEFBQWtCLEFBRXBEOztrQkFBZSx3QkFBQTtRQUNkLEFBQTBCLDhDQUExQixBQUF1QyxjQUR6QixBQUNkLEFBQXFEO0FBRHREIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L3JlYWwtdGltZS1mb3Jtcy9yZWFsLXRpbWUtZm9ybXMtZnJvbnQifQ==