/**
 * Angular On/Off Switch Input
 *
 * https://github.com/kevinlearynet/angular-switch-input
 * Copyright (c) 2014 Kevin Leary; Licensed MIT
 */

( function ( angular, document, undefined ) {
	'use strict';

	// directive
	angular.module( "ngSwitchInput", [] )
		.directive( 'ngSwitchInput', function () {

			/**
			 * Current Script Path
			 *
			 * Get the dir path to the currently executing script file
			 * which is always the last one in the scripts array with
			 * an [src] attr
			 */
			var currentScriptPath = function () {

				var scripts = document.querySelectorAll( 'script[src]' );
				var currentScript = scripts[ scripts.length - 1 ].src;
				var currentScriptChunks = currentScript.split( '/' );
				var currentScriptFile = currentScriptChunks[ currentScriptChunks.length - 1 ];

				return currentScript.replace( currentScriptFile, '' );
			}
			var currentPath = currentScriptPath();

			return {
				restrict: 'E',
				scope: {
					value: '=ngModel'
				},
				templateUrl: currentPath + 'angular-switch-input.html',
				link: function ( scope, element, attrs ) {

					// click handler
					scope.switch = function () {
						scope.value = ( scope.value === 0 ) ? 1 : 0;
					};
				}
			};
		} );

}( window.angular, window.document ) );
