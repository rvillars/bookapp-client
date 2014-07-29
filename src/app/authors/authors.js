'use strict';

var bookappAuthors = angular.module('bookapp.authors', ['ui.router']);

bookappAuthors.config(function config( $stateProvider ) {
    $stateProvider.state( 'authors', {
        url: '/authors',
        views: {
            'main': {
                controller: 'BookController',
                templateUrl: 'authors/authors.tpl.html'
            }
        },
        data:{ pageTitle: 'Authors' }
    });
});

bookappAuthors.controller('AuthorController', function ($scope, Author) {
    $scope.currentAuthor = new Author();
    $scope.authors = Author.query();
    $scope.showId = false;

    $scope.cancel = function () {
        $scope.currentAuthor = new Author();
    };

    $scope.save = function () {
        var isNew = $scope.currentAuthor.id == null;
        if (isNew) {
            $scope.currentAuthor = Author.save($scope.currentAuthor);
            $scope.authors.push($scope.currentAuthor);
        } else {
            $scope.currentAuthor = Author.update($scope.currentAuthor);
        }
        $scope.cancel();
    };

    $scope.edit = function (author) {
        $scope.currentAuthor = author;
    };

    $scope.remove = function (index, id) {
        $scope.authors.splice(index, 1);
        Author.remove({authorId: id});
    };
});

bookappAuthors.factory('Author', function ($resource) {
    return $resource('rest/authors/:authorId', {authorId: '@id'}, {
        'update': {method: 'PUT'}
    });
});