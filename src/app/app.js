'use strict';

var bookapp = angular.module('bookapp', [
    'templates-app',
    'bookapp.books',
    'bookapp.authors',
    'ui.bootstrap',
    'ui.router',
    'ngResource'
]);

bookapp.config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/books');
});

