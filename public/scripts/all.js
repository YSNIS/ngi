var app = angular.module("app", ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when("/",
		{
			templateUrl: "partials/main.blade.php",
			controller: "MainController",
		}
	);
}]);
app.controller("MainController", ['$scope', '$http', '$q', function($scope, $http, $q) {
	
	$scope.test = 'sup';

}]);
//# sourceMappingURL=all.js.map
