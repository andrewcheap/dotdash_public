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
			self.setDashColor		= setDashColor;
			self.setInfoHover 		= setInfoHover;
			self.removeInfoHover 	= removeInfoHover;
			self.setVisited			= setVisited;

			self.visited = false;

			/////////////////////////
			
			// watch new project because we have to wait for project call to return
			$scope.$watch(function(){
				return self.project;
			}, function(newValue, oldValue){
				if(newValue && newValue !== oldValue){
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

			function setInfoHover(){
				var infoButtons = document.getElementsByClassName("info");
				angular.element(infoButtons).addClass('hover');
				angular.element(infoButtons[4]).addClass('info-last');

			}

			function removeInfoHover(){
				var infoButtons = document.getElementsByClassName("info");
				angular.element(infoButtons).removeClass('hover');
			}

			function setVisited(){
				console.log("here");
				self.visited = true;
			}
		}

})();