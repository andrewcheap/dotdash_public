(function() {
	'use strict';

	angular.module('public.home')
		.component('home', {
			templateUrl: 'home/home.template.html',
			controller: homeController,
			controllerAs: 'home',
		});

		function homeController(projectDataService, $location) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.getProject 		= getProject;
			self.getDashNumber 		= getDashNumber;
			self.getDotNumber 		= getDotNumber;
			self.getProjectButton	= getProjectButton;


			activate();
			/////////////////////////
			function activate(){
				// Get the projects
				projectDataService.getProjects().then(getAllProjectsComplete).catch(requestRejected);
			}

			var info = {
				color: '#0000ff',
				name: 'Info',
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

			function getDashNumber(num) {
				return new Array(num);   
			}

			function getDotNumber(num) {
				return new Array(num);   
			}

			function getProjectButton(index){

				var project;
				if(index === 7 || index === 37 || index === 52 ||
					index === 67 || index === 82) {
					project = info;
				}
				else{
					project = _.find(self.projects, function(proj) { return proj.position === index; });
				}

				return project;
			}

			function getProject(id){
				console.log("getProject", id);
				projectDataService.getProject(id).then(getProjectComplete).catch(requestRejected);
			}



			// Private methods for handling promises
			function getAllProjectsComplete(results){
				self.projects = results.data;
				console.log("self.projects", self.projects);
				console.log("complete", results);
			}

			function getProjectComplete(results){
				self.project = results.data;
				console.log("complete", results);
			}

			function requestRejected(error){
				console.log("error", error);
			}
		}
})();