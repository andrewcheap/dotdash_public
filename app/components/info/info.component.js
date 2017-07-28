(function() {
	'use strict';

	angular.module('public.info')
		.component('info', {
			templateUrl: 'info/info.template.html',
			controller: infoController,
			controllerAs: 'info',
		});

		function infoController(projectDataService, $scope, $stateParams) {
			/* jshint validthis: true */
			var self = this;
			self.active = 0;

			// Interface


			activate();

			/////////////////////////
			function activate(){
				console.log("info");


				self.info = {
					color: '#0000ff',
					name: 'Info',
					id: 'info',
					company: {
						name: 'Dot Dash',
						address1: '120 Walker Street',
						address2: 'Suite 6E',
						city: 'New York, NY 10013',
						phone: '212.951.0660',
						email: 'info@dotdash.me',
					},
					employees: [
						{
							name: 'Christopher Cheap',
							email: 'Christopher@dotdash.me'
						},					
						{
							name: 'Brian Cheap',
							email: 'Brian@dotdash.me'
						},					
						{
							name: 'Isa Sanchez Sevillano',
							email: 'Isa@dotdash.me'
						},					
						{
							name: 'Fon Muangkeo',
							email: 'Fon@dotdash.me'
						},					
						{
							name: 'Julie Cheap',
							email: 'Julie@dotdash.me'
						},

					],
					profile: "Dot Dash is a New York City based design firm concentrating on architectural lighting design. Light is the emissary between architecture and the eye and, at Dot Dash, is our medium to reveal form, material and texture - to exhibit the built environment and augment the human experience.   Our approach begins with a comprehensive study of the architectural design, materials, liberties, constraints, and programmatic requirements.  This analysis serves as the foundation for our design approach and proposals. Our diverse experience across all project types and architectural styles, allows us to bring innovative designs with the highest level of expertise to each project. We are passionate about the design process and believe that an intimate collaboration yields the best results.",
					principal: "In addition to our lighting experience, Dot Dash brings extensive knowledge of daylighting, control systems, LEED Certification, systems integration, and on-site construction administration.  We understand that award winning projects begin in the studio but are realized with careful attention through project completion.",
					team_photo: '/icons/team_photo.jpg'
				};
			}



		}

})();