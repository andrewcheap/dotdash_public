(function() {
	'use strict';

	var base = 'https://dotdashportal.herokuapp.com/api/';
	var api_endpoints = {
		'PROJECTS': 		_.template(base + 'projects'),
		'PROJECT': 			_.template(base + 'project/${id}'),
	};

	angular.module('public.api')
		.constant('PORTAL_ENDPOINTS', api_endpoints);
})();