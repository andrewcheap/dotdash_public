(function() {
	'use strict';

	angular.module('public.imageGallery')
		.component('imageGallery', {
			templateUrl: 'imageGallery/imageGallery.template.html',
			controller: imageGalleryController,
			controllerAs: 'gallery',
		});

		function imageGalleryController(projectDataService, $scope, $stateParams, $timeout, $window) {
			/* jshint validthis: true */
			var self = this;
	
			// Interface
			self.project = {};
			activate();

			/////////////////////////
			function activate(){
				self.project = JSON.parse($window.sessionStorage.getItem('project_data'));
				self.showDetails = false;
				self.projectLoading = true;
				$timeout(function(){
					self.projectLoading = false;
				}, 1000);
		
			}
		}

})();