var app = angular.module('productApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'CategoryController',
    	templateUrl: 'views/category.html'
  	})
  	.when('/jackets', {
    	controller: 'JacketController',
        templateUrl: 'views/jacket.html'
    })
  	.when('/tshirts', {
    	controller: 'TshirtController',
        templateUrl: 'views/tshirt.html'
    })
    .when('/shoes', {
    	controller: 'ShoeController',
        templateUrl: 'views/shoe.html'
    })
    .when('/hats', {
    	controller: 'HatController',
        templateUrl: 'views/hat.html'
    })
  	.otherwise({
  		redirectTo: '/'	
  	});
});