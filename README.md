angular-switch-input
=========================

Angular directive for creating on/off switch form fields using pure CSS3. Compatable with iOS, Android, Chrome, Firefox, Safari, Opera, and IE 9+

Build status
------------

[![Build Status](https://travis-ci.org/kevinlearynet/angular-switch-input.png?branch=master)](https://travis-ci.org/Kevinlearynet/angular-switch-input)

Usage
-----

Add the CSS file into your application:
```html
<script src="angular-switch-input.min.css"></script>
```

Add the JavaScript file into your application:
```html
<script src="angular-switch-input.min.js"></script>
```

Add the module as a dependency to your application module:
```js
angular.module('MyApp', [/* other dependencies */, 'ngSwitchInput']);
```

Add the form field to a form in your application:
```html
<ng-switch-input ng-model="mySwitchValue"></ng-switch-input>
```

License
-------
Released under the terms of MIT License.

Copyright (C) 2014, Kevin Leary <info@kevinleary.net>
