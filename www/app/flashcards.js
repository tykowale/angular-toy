angular.module('flashcardApps', [])
.controller('flashcardController', function($scope) {
       $scope.decks = [
           {
               "name": "English Words",
               "description": "Learn some english with these cards!"
           },
           {
               "name": "Spanish Words",
               "description": "Learn some spanish with these cards!"
           }
       ]
    })
    .controller('formController', function($scope) {

    });