(function() {
	'use strict';

	angular.module('public.imageGallery')
		.component('imageGallery', {
			templateUrl: 'imageGallery/imageGallery.template.html',
			controller: imageGalleryController,
			controllerAs: 'gallery',
		});

		function imageGalleryController(projectDataService, $scope, $stateParams) {
			/* jshint validthis: true */
			var self = this;
			self.active = 0;

			// Interface
			self.trackCarousel = trackCarousel;

			activate();

			/////////////////////////
			function activate(){
				if($stateParams.id) {
					projectDataService.getProject($stateParams.id).then(getProjectComplete).catch(requestRejected);
				}
			}

			function trackCarousel($event){
				self.showDetails = $event.target.innerText === 'next' && self.lastImage ? true : false;

				/* After we determin if we should show details, then we reset/check if the current
				 image is the last image. */
				self.lastImage = (self.active == self.project.images.length - 1) ? true : false;

			}

			// Private methods for handling promises
			function getProjectComplete(results){
				console.log("here");
				self.project = results.data;
				self.active = 0;
				self.showDetails = false;
				console.log("complete", results);
			}

			function requestRejected(error){
				console.log("error", error);
			}
		}

})();