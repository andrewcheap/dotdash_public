'use strict';

module.exports = {
	'scripts': {
		'uglifyjs': 'uglifyjs -b beautify=false,max-line-len=120000',
	},
	'files': {
		'vendor': [
			"node_modules/angular/angular.js",
			"node_modules/angular-ui-router/release/angular-ui-router.min.js",
			"node_modules/lodash/lodash.min.js",
		],
		'app': [
			// API
			"app/api/app.api.module.js",
			"app/api/app.api.config.js",
			"app/api/app.api.service.js",
			"app/api/app.api.utils.js",

			// SERVICES

			// SHARED

			// COMPONENTS

			// home
			"app/components/home/home.module.js",
			"app/components/home/home.component.js",

			// routes
			"app/app.routes.js",
			
			// TEMPLATE CACHE
			"app/templates.js",

			// app
			"app/app.module.js",
					],
		'vendorCss': [
		],
		'css': [
			"app/components/**/*.css",
			"app/shared/**/*.css",
			"assets/css/styles.css",
		],
		'templates': [
			"app/components/**/*.html",
			"app/shared/**/*.html",
		]
	}
}