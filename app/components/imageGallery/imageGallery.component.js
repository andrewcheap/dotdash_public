(function() {
	'use strict';

	angular.module('public.imageGallery')
		.component('imageGallery', {
			templateUrl: 'imageGallery/imageGallery.template.html',
			controller: imageGalleryController,
			controllerAs: 'gallery',
			bindings: {
				project: '=',
			}
		});

		function imageGalleryController($scope) {
			/* jshint validthis: true */
			var self = this;
			self.active = 0;

			// Interface
			self.trackCarousel = trackCarousel;

			/////////////////////////
			// watch new project because we have to wait for project call to return
			$scope.$watch(function(){
				return self.project;
			}, function(newValue, oldValue){
				if(newValue){
					self.active = 0;
					self.showDetails = false;
					self.project = newValue;
				}
			});


			function trackCarousel($event){
				self.showDetails = $event.target.innerText === 'next' && self.lastImage ? true : false;

				/* After we determin if we should show details, then we reset/check if the current
				 image is the last image. */
				self.lastImage = (self.active == self.project.images.length - 1) ? true : false;

			}
		}

})();