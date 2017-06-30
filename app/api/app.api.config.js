(function() {
	'use strict';

	var base = 'http://portal.dotdash.me/api/';
	var api_endpoints = {
		'PROJECTS': 		_.template(base + 'projects'),
		'PROJECT': 			_.template(base + 'project/${id}'),
	};

	angular.module('portal.api')
		.constant('PORTAL_ENDPOINTS', api_endpoints);
})();