(function() {
	'use strict';

	angular.module('public.projectButtons')
		.component('projectButtons', {
			templateUrl: 'projectButtons/projectButtons.template.html',
			controller: projectButtonsController,
			controllerAs: 'buttons',
			bindings: {
				projects: '=',
			}
		});

		function projectButtonsController() {
			/* jshint validthis: true */
			var self = this;

			// Interface

			
			activate();
			/////////////////////////

			function activate(){
				console.log("self.projects in button", self.projects);
			}


		}

})();