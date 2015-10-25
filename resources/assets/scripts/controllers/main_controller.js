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