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

		function homeController($location, $stateParams, $scope, $window) {
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
				$scope.$watch(function(){
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
				var url = "/" + id;
				$location.path(url);
			}

			function getProjectToggle(id){
				var currentPath = $window.location.hash.split('/')[1];
				var nextUrl = "/";
				if(id === currentPath){
					$location.path(nextUrl);
				}
				else {
					nextUrl = "/" + id;
					$location.path(nextUrl);
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

	
		}
})();