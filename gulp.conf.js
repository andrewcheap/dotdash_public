'use strict';

module.exports = {
	'scripts': {
		'uglifyjs': 'uglifyjs -b beautify=false,max-line-len=120000',
	},
	'files': {
		'vendor': [
			"node_modules/angular/angular.js",
			"node_modules/angular-animate/angular-animate.min.js",
			"node_modules/angular-touch/angular-touch.min.js",
			"node_modules/angular-sanitize/angular-sanitize.min.js",
			"node_modules/angular-ui-router/release/angular-ui-router.min.js",
			"node_modules/lodash/lodash.min.js",
			"node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js",
			"node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"
		],
		'app': [
			// API
			"app/api/app.api.module.js",
			"app/api/app.api.config.js",
			"app/api/app.api.service.js",
			"app/api/app.api.utils.js",

			// SERVICES


			// COMPONENTS

			// home
			"app/components/home/home.module.js",
			"app/components/home/home.component.js",

			// imageGallery
			"app/components/imageGallery/imageGallery.module.js",
			"app/components/imageGallery/imageGallery.component.js",

			// info
			"app/components/info/info.module.js",
			"app/components/info/info.component.js",

			// SHARED
			"app/shared/dashButton/dashButton.module.js",
			"app/shared/dashButton/dashButton.component.js",

			// routes
			"app/app.routes.js",
			
			// TEMPLATE CACHE
			"app/templates.js",

			// app
			"app/app.module.js",
					],
		'vendorCss': [
			"node_modules/bootstrap/dist/css/bootstrap.css",
		],
		'fonts': [
			"node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
			"node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
			"node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
			"node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
			"node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
		],
		'icons': [
			"assets/icons/**.*",
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