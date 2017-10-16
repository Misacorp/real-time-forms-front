'use strict';

/**
 * Registers our Service Worker on the site
 * Need more? check out:
 * https://github.com/GoogleChrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
 */

if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js').then(function (reg) {
		console.log('Service worker registered (0-0) ');
	}).catch(function (e) {
		console.error('Error during service worker registration:', e);
	});
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL29mZmxpbmUuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwid2luZG93IiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsInJlZyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBTUEsSUFDQyxRQUFRLEFBQVIsSUFBWSxBQUFaLGFBQXlCLEFBQXpCLGdCQUNBLE9BQU8sQUFBUCxXQUFrQixBQURsQixlQUVBLG1CQUFtQixBQUhwQixXQUlFLEFBQ0Q7V0FBVSxBQUFWLGNBQ0UsQUFERixTQUNXLEFBRFgsU0FFRSxBQUZGLEtBRU8sVUFBUyxBQUFULEtBQWMsQUFDbkI7VUFBUSxBQUFSLElBQVksQUFBWixBQUNBO0FBSkYsSUFLRSxBQUxGLE1BS1EsVUFBUyxBQUFULEdBQVksQUFDbEI7VUFBUSxBQUFSLE1BQWMsQUFBZCw2Q0FBMkQsQUFBM0QsQUFDQTtBQVBGLEFBUUEiLCJmaWxlIjoib2ZmbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9yZWFsLXRpbWUtZm9ybXMvcmVhbC10aW1lLWZvcm1zLWZyb250In0=