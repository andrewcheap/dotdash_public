(function() {
	'use strict';

	angular.module('public.home')
		.component('home', {
			templateUrl: 'home/home.template.html',
			controller: homeController,
			controllerAs: 'home',
			bindings: {
				projects: '<'
			},
		});

		function homeController($location, $scope, $stateParams, $window, projectDataService) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.getProject 		= getProject;
			self.getDashNumber 		= getDashNumber;
			self.getDotNumber 		= getDotNumber;
			self.getProjectButton	= getProjectButton;
			self.showGallery		= showGallery;
			self.getProjectToggle	= getProjectToggle;


			activate();
			/////////////////////////
			function activate(){

				// hack since I can't figure out why $stateParams.id is undefined
				self.currentPath = $window.location.hash.split('/')[1];

				if(self.currentPath) {
					self.getProject(self.currentPath);
				}

				$scope.$watchCollection(function(){
					return self.projects;
				}, function(newValue, oldValue){
					if(newValue !== oldValue) {
						self.projects = newValue;
					}
				});
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
				if(id === 'info'){
					$location.path("/info");
				}
				else {
					projectDataService.getProject(id).then(getProjectComplete).catch(requestRejected);
				}
			}

			// For mobile
			function getProjectToggle(id){
				var nextUrl = "/";
				if(id === self.currentPath){
					$location.path(nextUrl);
				}
				else {
					self.getProject(id);
				}
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
			function getProjectComplete(results){
				// setting session storage to prevent the gallery from making multiple calls
				$window.sessionStorage.setItem('project_data', JSON.stringify(results.data));
				console.log("Project Retrieved", results);

				var url = "/" + results.data.id;
				$location.path(url);
			}

			function requestRejected(error){
				console.log("error", error);
			}

	
		}
})();