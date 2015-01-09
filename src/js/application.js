'use strict';

var bookapp = angular.module('bookapp', [
    'ui.bootstrap',
    'ui.router',
    'ngResource',
    'chell-iam',
    'chell-cms',
    'ngMockE2E'
]);

bookapp.config(function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
});

bookapp.run(function run($httpBackend) {
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
});

