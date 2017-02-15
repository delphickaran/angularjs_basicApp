var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
             $routeProvider
             .when('/' ,{
                 templateUrl : 'pages/home.html' ,
                 controller: 'homeController'
             })
             .when('/service',{
                 templateUrl: 'pages/service.html',
                 controller: 'serviceController'
             })
             .when('/about',{
                 templateUrl:'pages/about.html',
                 controller:'aboutController'
             })
             .when('/contact',{
                 templateUrl:'pages/contact.html',
                 controller:'contactController'
             }).
             otherwise({redirectTo : 'pages/home'})
             })

myApp.controller('homeController',['$scope',function($scope){
    
}]);
myApp.controller('serviceController',['$scope' ,'$http',function($scope , $http){
     $http.get('services.json').then(function(response){
         $scope.services = response.data;
         console.log($scope.services)
     })
}]);
myApp.controller('aboutController',['$scope',function($scope){
    
}]);
myApp.controller('contactController',['$scope','$http',function($scope,$http){
    $http.get('contact.json').then(function(response){
        $scope.contact = response.data;
        console.log($scope.contact)
    })
    
}]);
