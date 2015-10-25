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