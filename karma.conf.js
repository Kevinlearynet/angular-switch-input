// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function ( config ) {
	config.set( {
		basePath: '',

		frameworks: [ 'jasmine' ],

		// list of files / patterns to load in the browser
		files: [
			'vendor/angular/angular.js',
			'vendor/angular-mocks/angular-mocks.js',
			'vendor/jquery/dist/jquery.min.js',
			'dist/angular-switch-input.min.css',
			'dist/angular-switch-input.min.js',
			'dist/angular-switch-input.html',
			'dist/angular-switch-input-test.js'
		],

		// generate js files from html templates
		preprocessors: {
			'dist/angular-switch-input.html': 'ng-html2js'
		},

		autoWatch: true,
		browsers: [ 'Chrome' ]
	} );
};
