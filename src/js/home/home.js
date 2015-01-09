'use strict';

var bookapp = angular.module('bookapp');

bookapp.config(function config( $stateProvider ) {
    $stateProvider.state( 'home', {
        url: '/home',
        templateUrl: 'pages/home.tpl.html'
    });
});

bookapp.controller('HomeController', function ($scope) {

});