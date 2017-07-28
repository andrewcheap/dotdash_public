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
			})
			.state("info", {
				data: {
					pageTitle: "Dot Dash Portal | Lighting Design"
				},
				url:'/info',
				template: '<info></info>'
			})
			.state("projectDetails", {
				data: {
					pageTitle: "Dot Dash Portal | Lighting Design"
				},
				url:'/:id',
				template: '<image-gallery></image-gallery>'
			});
	}
})();