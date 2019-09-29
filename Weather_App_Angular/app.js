var RecipeApp = angular.module('RecipeApp',['ngRoute']);
//Routes
RecipeApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })


})
RecipeApp.controller('homeController', ['$scope','$log', function($scope,$log) {
    $scope.recipe = Recipe;
    $log.log($scope.recipe);

}]);