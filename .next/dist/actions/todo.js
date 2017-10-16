'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addTodo = addTodo;
exports.removeTodo = removeTodo;

var _ = require('./');

function addTodo(text) {
	return {
		type: _.ADD_TODO,
		text: text
	};
}

function removeTodo(todo) {
	return {
		type: _.REMOVE_TODO,
		todo: todo
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvdG9kby5qcyJdLCJuYW1lcyI6WyJBRERfVE9ETyIsIlJFTU9WRV9UT0RPIiwiYWRkVG9kbyIsInRleHQiLCJ0eXBlIiwicmVtb3ZlVG9kbyIsInRvZG8iXSwibWFwcGluZ3MiOiI7Ozs7O1FBRU8sQUFBUztRQU9ULEFBQVM7O0FBVGhCLEFBQVMsQUFBVSxBQUFtQixBQUV0Qzs7QUFBTyxpQkFBQSxBQUFpQixNQUFNLEFBQzdCOztBQUFPLEFBQ0EsQUFDTjtRQUZELEFBQU8sQUFJUDtBQUpPLEFBQ047QUFLRjs7QUFBTyxvQkFBQSxBQUFvQixNQUFNLEFBQ2hDOztBQUFPLEFBQ0EsQUFDTjtRQUZELEFBQU8sQUFJUDtBQUpPLEFBQ04iLCJmaWxlIjoidG9kby5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9yZWFsLXRpbWUtZm9ybXMvcmVhbC10aW1lLWZvcm1zLWZyb250In0=