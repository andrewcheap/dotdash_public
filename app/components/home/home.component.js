(function() {
	'use strict';

	angular.module('portal.home')
		.component('home', {
			templateUrl: 'home/home.template.html',
			controller: homeController,
			controllerAs: 'home',
			bindings: {

			}
		});

		function homeController(projectDataService, $location, $templateCache) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.getProject 	= getProject;


			activate();
			/////////////////////////
			function activate(){
				console.log('home');
				// Get the projects
				projectDataService.getProjects().then(getAllProjectsComplete).catch(requestRejected);
			}

			function getProject(id){
				projectDataService.getProject(id).then(getProjectComplete).catch(requestRejected);
			}

			// Private methods for handling promises
			function getAllProjectsComplete(results){
				self.projects = results.data;
				console.log("self.projects", self.projects);
				console.log("complete", results);
			}

			function getProjectComplete(results){
				self.project = results.data;
				console.log("complete", results);
			}

			function requestRejected(error){
				console.log("error", error);
			}
		}
})();