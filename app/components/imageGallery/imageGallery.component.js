(function() {
	'use strict';

	angular.module('public.imageGallery')
		.component('imageGallery', {
			templateUrl: 'imageGallery/imageGallery.template.html',
			controller: imageGalleryController,
			controllerAs: 'gallery',
		});

		function imageGalleryController(projectDataService, $scope, $stateParams, $timeout) {
			/* jshint validthis: true */
			var self = this;
			self.active = 0;

			// Interface
			self.projectLoading = true;
			activate();

			/////////////////////////
			function activate(){
				if($stateParams.id) {
					projectDataService.getProject($stateParams.id).then(getProjectComplete).catch(requestRejected);
				}
			}

			// Private methods for handling promises
			function getProjectComplete(results){
				self.project = results.data;
				self.active = 0;
				self.showDetails = false;
				$timeout(function(){
					self.projectLoading = false;
				}, 100); 
				
				console.log("complete", results);
			}

			function requestRejected(error){
				console.log("error", error);
			}
		}

})();