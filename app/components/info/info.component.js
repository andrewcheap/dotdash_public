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
						map: 'https://www.google.com/maps/place/120+Walker+St,+New+York,+NY+10013/@40.7175678,-74.0018692,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a275bcee06b:0x7b3ea15184d2e194!8m2!3d40.7175678!4d-73.9996805',
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
							name: 'Roxana Hathaway',
							email: 'Roxana@dotdash.me'
						},	
						{
							name: 'Emma Weaver',
							email: 'Emma@dotdash.me'
						},					
						{
							name: 'Julie Cheap',
							email: 'Julie@dotdash.me'
						},

					],
					profile: "<p>Dot Dash is a New York City based design firm concentrating on architectural lighting design. Light is the emissary between architecture and the eye and, at Dot Dash, is our medium to reveal form, material and texture - to exhibit the built environment and augment the human experience.   Our approach begins with a comprehensive study of the architectural design, materials, liberties, constraints, and programmatic requirements.  This analysis serves as the foundation for our design approach and proposals. Our diverse experience across all project types and architectural styles, allows us to bring innovative designs with the highest level of expertise to each project. We are passionate about the design process and believe that an intimate collaboration yields the best results.</p><p>In addition to our lighting experience, Dot Dash brings extensive knowledge of daylighting, control systems, LEED Certification, systems integration, and on-site construction administration.  We understand that award winning projects begin in the studio but are realized with careful attention through project completion.</p>",
					principal: "<p>Dot Dash was founded by Christopher Cheap in 2014. His extensive experience across all project types, scales, budgets, and styles has included the Manus x Machina Spring Costume Exhibition at the Metropolitan Museum of Art, the Paramount Theater with H3 Hardy Collaboration Architects,  the Samsung showcase pavilion at the PyeongChang Olympic Park with 2x4, the Blue School with Rockwell Group, the transformation of Wardman Tower into Luxury Residences with Deborah Berke Partners, and the Dartmouth Energy Institute with Kuwabara Payne McKenna Blumberg Architects</p><p>Prior to forming Dot Dash, Christopher was a Principal with Tillotson Design Associates.  His projects have won several awards including an IALD award of Excellence, an IES Lumen Citation, a GE award of Excellence, and an A|L Outstanding Achievement Award.  Christopher is a professional member of the IALD.  He is lives in Brooklyn, NY with his wife and two daughters.</p><p>Christopher oversees all aspects of every project from concept through completion to ensure the highest standards of design and documentation.  In addition to leading the programming and concept design, he attends the client meetings and reviews all deliverables throughout the project.</p>",
					team_photo: '/images/team_photo.jpg'
				};
			}



		}

})();