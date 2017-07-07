(function() {
	'use strict';

	angular.module('public.api')
		.service('projectDataService', ['PORTAL_ENDPOINTS', 'utilityService', projectDataService]);

	function projectDataService(PORTAL_ENDPOINTS, utilityService) {

		/* jshint validthis: true*/
		var self = this;

		// Interface
		self.getProjects		= getProjects;
		self.getProject 		= getProject;

		////////////
		function getProject(id) {
			var url_params = {
				"id": id
			};

			var url = PORTAL_ENDPOINTS.PROJECT(url_params);
			var title = "Get Project";
			return utilityService.getPromise(title, url);
		}

		function getProjects() {
			var url_params = {
			};

			var url = PORTAL_ENDPOINTS.PROJECTS(url_params);
			var title = "Get Projects";
			return utilityService.getPromise(title, url);
		}

	}
})();