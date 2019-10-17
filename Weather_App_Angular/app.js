var RecipeApp = angular.module('RecipeApp',['ngRoute']);
//Routes
RecipeApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    .when('/Indian', {
        templateUrl: 'pages/Indian.htm',
        controller: 'IndianController'
    })
    .when('/Italian', {
        templateUrl: 'pages/Italian.htm',
        controller: 'ItalianController'
    })
    .when('/Korean', {
        templateUrl: 'pages/Korean.htm',
        controller: 'KoreanController'
    })
    .when('/Chinese', {
        templateUrl: 'pages/Chinese.htm',
        controller: 'ChineseController'
    })
    .when('/French', {
        templateUrl: 'pages/French.htm',
        controller: 'FrenchController'
    })
   

})
RecipeApp.controller('homeController', ['$scope','$log', function($scope,$log) {
    $scope.recipe = Recipe;
    //$log.log($scope.recipe);


}]);
RecipeApp.controller('IndianController', ['$scope','$log', function($scope,$log) {
   $scope.indianRecipe = Recipe;
   $scope.resultIndian = $scope.indianRecipe.filter((res)=>{
       if(res.type === "Indian"){
           return { name: res.name}
       }
   }) 
   console.log($scope.resultIndian)

}]);
RecipeApp.controller('ItalianController', ['$scope','$log', function($scope,$log) {
    $scope.italianRecipe = Recipe;
    $scope.resultItalian = $scope.italianRecipe.filter((res)=>{

        if(res.type === "Italian"){
            return { name: res.name}
        }
    }) 
    console.log($scope.resultItalian)
    
    

}]);
RecipeApp.controller('FrenchController', ['$scope','$log', function($scope,$log) {
    $scope.frenchRecipe = Recipe;
    $scope.resultFrench = $scope.frenchRecipe.filter((res)=>{

        if(res.type === "French"){
            return { name: res.name}
        }
    }) 
    console.log($scope.resultFrench)
    

}]);
RecipeApp.controller('ChineseController', ['$scope','$log', function($scope,$log) {
    $scope.chineseRecipe = Recipe;
    $scope.resultChinese = $scope.chineseRecipe.filter((res)=>{

        if(res.type === "Chinese"){
            return { name: res.name}
        }
    }) 
    console.log($scope.resultChinese)

}]);
RecipeApp.controller('KoreanController', ['$scope','$log', function($scope,$log) {
    $scope.koreanRecipe = Recipe;
    $scope.resultKorean = $scope.koreanRecipe.filter((res)=>{

        if(res.type === "Korean"){
            return { name: res.name}
        }
    }) 
    console.log($scope.resultKorean)
    
    

}]);

RecipeApp.directive("searchResult", fucntion() {

});