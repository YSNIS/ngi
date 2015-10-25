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
	
	//Removes # from URL
    if(window.history && window.history.pushState){
		//$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

		// to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

		// if you don't wish to set base URL then use this
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
    }
}]);
app.controller("HeaderController", ['$scope', function($scope){
	$scope.title = "New Game Itch";
	$scope.subtitle = "Scratch that itch!";
}]);
app.controller("MainController", ['$scope', '$http', 'henchmen', '$q', function($scope, $http, henchmen, $q) {
	
	$scope.henchmen = {};

	$scope.delete = function (id) {
		henchmen.delete(id);
	};

	var init = function () {

		var getHenchmen = function () {
			var deferred = $q.defer();
			deferred.resolve(henchmen.getHenchmen());
			return deferred.promise;
		}

		var promise = getHenchmen();
		promise.then(function(data){
			$scope.henchmen = data.data;
		});

	}

	init();

	

	// $scope.henchmen = henchmen.henchmen;


}]);
app.factory('henchmen', ['$http', function($http) {
	var henchmen = {
		henchmen: []
	};

	henchmen.createHenchmen = function () {
	  	$http.post('/henchmen/' + $scope.henchmenName).
	  		then(function(data){
	  			$scope.henchmen.push({
	  				id : data.data.id,
	  				name : data.data.name,
	  			});
	  			console.log(data.data);
	  		}, function(error){
	  			console.log(error);
	  		});
	  	$scope.henchmenName = '';		
	},
	henchmen.delete = function (id) {
		$http.delete('/henchmen/' + id).
			then(function(data){
				henchmen.henchmen.push(data);
			}, function(error){
				console.log(error);
			});
	},
	henchmen.getHenchmen = function () {
		return $http.get('/henchmen').
			success(function(data){
				henchmen.henchmen.push(data);
			}, function(error){
				console.log(error);
			});
	}
	return henchmen;
}]);
//# sourceMappingURL=all.js.map