var RecipeApp = angular.module('RecipeApp',['ngRoute']);
//Routes
RecipeApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    .when('/Recipe', {
        templateUrl: 'pages/recipe.htm',
        controller: 'recipeController'
    })
    .when('/cuisine', {
        templateUrl: 'pages/cuisine.htm',
        controller: 'cuisineController'
    })

})

//SERVICES
RecipeApp.service('dataService',function(){
    this.cuisines = Recipe;
    this.unique_results = [...new Set(this.cuisines.map(each => each.type))]
})
RecipeApp.controller('homeController', ['$scope','$log','dataService', function($scope,$log,dataService) {
    $scope.recipe = Recipe;
    console.log("service",dataService.cuisines);
    //$log.log($scope.recipe);


}]);
RecipeApp.controller('navController', ['$scope','$log','dataService', function($scope,$log,dataService) {
  
   $scope.unique_result = dataService.unique_results;
   console.log($scope.unique_result);
   console.log($scope.container);
   $scope.getValue=function(rvalue){
   $scope.value = rvalue;
   return $scope.value;
   }
  
   console.log($scope.getValue);
   
  

}]);
RecipeApp.controller('cuisineController', ['$scope','$log','dataService', function($scope,$log,dataService) {
   // $scope

   console.log($scope.container);
   $scope.getValue=function(){

   }
   console.log($scope.getValue)
    // $scope.resultItalian = $scope.italianRecipe.filter((res)=>{

    //     if(res.type === "Italian"){
    //         return { name: res.name}
    //     }
    // }) 
    // console.log($scope.resultItalian)
    
    

}]);
RecipeApp.controller('recipeController', ['$scope','$log', function($scope,$log) {
    $scope.frenchRecipe = Recipe;
    $scope.resultFrench = $scope.frenchRecipe.filter((res)=>{

        if(res.type === "French"){
            return { name: res.name}
        }
    }) 
    console.log($scope.resultFrench)
    

}]);


