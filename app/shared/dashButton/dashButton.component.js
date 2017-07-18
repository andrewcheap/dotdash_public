(function() {
	'use strict';

	angular.module('public.dashButton')
		.component('dashButton', {
			templateUrl: 'dashButton/dashButton.template.html',
			controller: dashButtonController,
			controllerAs: 'dash',
			bindings: {
				project: '<?',
				callback: '&'
			}
		});

		function dashButtonController($scope) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.setDashColor	= setDashColor;

			/////////////////////////
			
			// watch new project because we have to wait for project call to return
			$scope.$watch(function(){
				return self.project;
			}, function(newValue, oldValue){
				if(newValue){
					self.project = newValue;
				}
			});

			function setDashColor(){
				if(self.project) {
					return { 'background-color': self.project.color};
				}
				else {
					return { "visibility": "hidden"  };
				}
			}
		}

})();