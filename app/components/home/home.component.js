(function() {
	'use strict';

	angular.module('public.home')
		.component('home', {
			templateUrl: 'home/home.template.html',
			controller: homeController,
			controllerAs: 'home',
		});

		function homeController(projectDataService, $location) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.getProject 		= getProject;
			self.getDashNumber 		= getDashNumber;
			self.getDotNumber 		= getDotNumber;
			self.getProjectButton	= getProjectButton;


			activate();
			/////////////////////////
			function activate(){
				// Get the projects
				projectDataService.getProjects().then(getAllProjectsComplete).catch(requestRejected);
			}

			function getDashNumber(num) {
				return new Array(num);   
			}

			function getDotNumber(num) {
				return new Array(num);   
			}

			function getProjectButton(index){
				var project = _.find(self.projects, function(proj) { return proj.position === index; });
				return project;
			}

			function getProject(id){
				console.log("getProject", id);
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