// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';
import './polyfill/find'; // Polyfill for PhantomJS.

const context = require.context('./', true, /\.js$/); // (?!(:?^app.js$))&

context.keys().filter((key) => key && !/(:?app.js$)|(:?tests.webpack.js$)/.test(key)).forEach(context);
