(function() {
	'use strict';

	angular.module('public.app', [
		// External dependencies
		'ui.router',
		
		// Internal dependencies
		'public.routes',
		'public.api',
		'public.home',
		'templates'
		])
		.config(['$locationProvider',
			function($locationProvider) {
				$locationProvider.html5Mode({
				  enabled: true,
				  requireBase: false
				});
			}]);

	angular.bootstrap(document, ['public.app']);

})();