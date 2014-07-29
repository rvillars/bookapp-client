'use strict';

var bookapp = angular.module('bookapp', [
    'templates-app',
    'templates-common',
    'bookapp.books',
    'bookapp.authors',
    'ui.bootstrap',
    'ui.router',
    'ngResource'
]);

bookapp.config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/books');
});

