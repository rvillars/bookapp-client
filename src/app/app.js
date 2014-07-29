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



bookapp.controller('AppCtrl', function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | bookapp';
        }
    });
});

