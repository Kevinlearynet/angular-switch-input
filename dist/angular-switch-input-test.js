/*
TODO:

replace the directive element with template
hide the checkbox input
change the value of the hidden input on click
set the active class
update the scope with the new input value

Reference: https://github.com/vojtajina/ng-directive-testing/
*/

'use strict';

describe( 'test module ngSwitchInput: ', function () {

	var switchField, scope;

	beforeEach( function () {
		module( 'ngSwitchInput' );
	} );

	beforeEach( inject( function ( $rootScope, $compile ) {
		switchField = angular.element( '<ng-switch-input ng-model="switchValue"></ng-switch-input>' );

		scope = $rootScope;
		$compile( switchField )( scope );
		scope.$digest();
	} ) );

	it( 'should replace the directive element with our template', inject( function ( $compile, $rootScope ) {
		expect( switchField.find( 'input' ).hasClass( 'switch-input-checkbox' ) ).toBe( true );
		expect( switchField.find( 'div' ).hasClass( 'switch-input' ) ).toBe( true );
	} ) );

	it( 'should set active class on container when switched', function () {
		var input = switchField.find( 'input[type="checkbox"]' );
		var container = switchField.find( 'div.switch-input' );

		if ( input.val() === true ) {
			expect( container ).toHaveClass( 'active' );
		} else {
			expect( container ).not.toHaveClass( 'active' );
		}
	} );
} );
