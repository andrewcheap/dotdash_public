(function() {
	'use strict';

	angular.module('public.mainCtrl', ['public.api'])
		.controller('MainController', MainController);

		function MainController(projectDataService) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.loading = true;


			activate();
			/////////////////////////
			function activate(){
				// Get the projects
				projectDataService.getProjects().then(getAllProjectsComplete).catch(requestRejected);
            }
            


			// Private methods for handling promises
			function getAllProjectsComplete(results){
				self.projects = results.data;
				self.loading = false;
				// console.log("complete", results);
			}

			function requestRejected(error){
				console.log("error", error);
			}

		}
})();