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
			var active = 0;
			// Interface

			/////////////////////////
			// watch new project because we have to wait for project call to return
			$scope.$watch(function(){
				return self.project;
			}, function(newValue, oldValue){
				if(newValue){
					self.project = newValue;
				}
			});


		}

})();