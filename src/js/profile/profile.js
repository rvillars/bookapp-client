'use strict';

var bookapp = angular.module('bookapp');

bookapp.config(function config( $stateProvider ) {
    $stateProvider.state( 'profile', {
        url: '/profile',
        templateUrl: 'pages/profile.tpl.html'
    });
});

bookapp.controller('ProfileController', function ($scope) {

});