(function() {
	'use strict';

	angular.module('public.routes', [])
		.config(['$stateProvider', '$urlRouterProvider', configRoutes]);

	function configRoutes($stateProvider, $urlRouterProvider) {

		// routes
		$stateProvider
			.state("home", {
				data: {
					pageTitle: "Dot Dash Portal | Lighting Design"
				},
				url:'/',
				template: '<home></home>'
			})
			.state("projectDetails", {
				data: {
					pageTitle: "Dot Dash Portal | Lighting Design"
				},
				url:'/:id',
				template: '<home></home>'
			});
	}
})();