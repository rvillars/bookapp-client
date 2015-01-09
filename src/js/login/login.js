'use strict';

var bookapp = angular.module('bookapp');

bookapp.config(function config( $stateProvider ) {
    $stateProvider.state( 'login', {
        url: '/login',
        templateUrl: 'pages/login.tpl.html'
    });
});

bookapp.controller('LoginController', function ($scope, $state) {
    $scope.navigateToLogin = function() {
        $state.go('login');
    };
    $scope.navigateToAfterLogin = function() {
        $state.go('home');
    };
});