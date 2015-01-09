'use strict';

var bookapp = angular.module('bookapp');

bookapp.config(function config( $stateProvider ) {
    $stateProvider.state( 'users', {
        url: '/users',
        templateUrl: 'pages/users.tpl.html'
    });
});

bookapp.controller('UserController', function ($scope) {

});