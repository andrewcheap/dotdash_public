(function() {
	'use strict';

	angular.module('public.home')
		.component('home', {
			templateUrl: 'home/home.template.html',
			controller: homeController,
			controllerAs: 'home',
		});

		function homeController(projectDataService, $location, $stateParams) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.getProject 		= getProject;
			self.getDashNumber 		= getDashNumber;
			self.getDotNumber 		= getDotNumber;
			self.getProjectButton	= getProjectButton;
			self.showGallery		= showGallery;


			activate();
			/////////////////////////
			function activate(){
				// Get the projects
				projectDataService.getProjects().then(getAllProjectsComplete).catch(requestRejected);
			}

			self.info = {
				color: '#0000ff',
				name: 'Info',
				id: 'info',
			};

			function getDashNumber(num) {
				return new Array(num);   
			}

			function getDotNumber(num) {
				return new Array(num);   
			}

			function getProjectButton(index){
				var project;

				if(isInfoButton(index)) {
					project = self.info;
				}
				else{
					project = _.find(self.projects, function(proj) { return proj.position === index; });
				}

				return project;
			}

			function getProject(id){
				var url = "/" + id;
				$location.path(url);
			}

			//For mobile gallery
			function showGallery(projectId){
				return projectId === ($stateParams.id);
			}

			//Private methods
			function isInfoButton(index){
				if(index === 7 || index === 37 || index === 52 ||
					index === 67 || index === 82) {
					return true;
				}
				else {
					return false;
				}
			}
							

			// Private methods for handling promises
			function getAllProjectsComplete(results){
				self.projects = results.data;
				console.log("complete", results);
			}

			function requestRejected(error){
				console.log("error", error);
			}
		}
})();