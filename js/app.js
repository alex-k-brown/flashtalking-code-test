var app = angular.module('productApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'CategoryController',
    	templateUrl: 'views/categories.html'
  	})
  	.when('/jackets', {
    	controller: 'JacketController',
        templateUrl: 'views/category.html'
    })
    .when('/jackets/:id', {
      controller: 'JacketController',
        templateUrl: 'views/single.html'
    })
  	.when('/tshirts', {
    	controller: 'TshirtController',
        templateUrl: 'views/category.html'
    })
    .when('/tshirts/:id', {
      controller: 'TshirtController',
        templateUrl: 'views/single.html'
    })
    .when('/shoes', {
    	controller: 'ShoeController',
        templateUrl: 'views/category.html'
    })
    .when('/shoes/:id', {
      controller: 'ShoeController',
        templateUrl: 'views/single.html'
    })
    .when('/hats', {
    	controller: 'HatController',
        templateUrl: 'views/category.html'
    })
    .when('/hats/:id', {
      controller: 'HatController',
        templateUrl: 'views/single.html'
    })
  	.otherwise({
  		redirectTo: '/'	
  	});
});