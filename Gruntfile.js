'use strict';
module.exports = function ( grunt ) {

	grunt.registerTask( 'default', 'watch' );

	grunt.initConfig( {
		uglify: {
			options: {
				report: 'min',
				mangle: true
			},
			js: {
				files: [ {
					src: 'dist/angular-switch-input.js',
					dest: 'dist/angular-switch-input.min.js'
				} ]
			}
		},
		less: {
			style: {
				files: {
					"dist/angular-switch-input.dev.css": "dist/angular-switch-input.less"
				}
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'dist/',
				src: [ 'angular-switch-input.dev.css' ],
				dest: 'dist/',
				ext: '.min.css'
			}
		},
		watch: {
			js: {
				files: [
					'dist/angular-switch-input.js'
				],
				tasks: [ 'uglify:js' ],
				options: {
					livereload: true
				}
			},
			css: {
				files: [ 'dist/*.less' ],
				tasks: [ 'less:style', 'cssmin:minify' ],
				options: {
					livereload: true
				}
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

};
