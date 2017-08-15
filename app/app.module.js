(function() {
	'use strict';

	angular.module('public.app', [
		// External dependencies
		'ui.router',
		
		// Internal dependencies
		'public.routes',
		'public.home',
		'public.mainCtrl',
		'templates'
		])
		.config(['$locationProvider',
			function($locationProvider) {
				$locationProvider.html5Mode({
				  enabled: false,
				  requireBase: false
				});
			}]);

	angular.bootstrap(document, ['public.app']);

})();