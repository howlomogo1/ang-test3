var headerModule = angular.module("headerModule", [
	"ngRoute"
	]);

myModule.controller('myProducts', function($scope){
	$scope.products = [
		"Tim", "Jim", "Bob"
	];
});

myModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/index', {
			templateUrl: '/home.html',
		}).
		when('/products', {
			templateUrl: '/products.html',
		}).
		when('/contact', {
			templateUrl: '/contact.html',
		}).
		otherwise({
			redirectTo: '/index'
		});
}]);