(function() {
	'use strict';

	angular.module('portal.app', [
		// External dependencies
		'ui.router',
		
		// Internal dependencies
		'portal.routes',
		'portal.api',
		'portal.home',
		'templates'
		])
		.config(['$locationProvider',
			function($locationProvider) {
				$locationProvider.html5Mode({
				  enabled: true,
				  requireBase: false
				});
			}]);

	angular.bootstrap(document, ['portal.app']);

})();