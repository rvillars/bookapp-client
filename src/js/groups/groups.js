'use strict';

var bookapp = angular.module('bookapp');

bookapp.config(function config( $stateProvider ) {
    $stateProvider.state( 'groups', {
        url: '/groups',
        templateUrl: 'pages/groups.tpl.html'
    });
});

bookapp.controller('GroupsController', function ($scope) {

});