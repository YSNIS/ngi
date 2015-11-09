var app = angular.module("app", ['ngRoute', 'ui.bootstrap'], function($interpolateProvider){
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
app.controller('GameModalController', function ($scope, $uibModalInstance, game) {

  $scope.game = game;

  console.log(game);
  
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.close(console.log('hi'));
  };

});
app.controller("MainController", ['$scope', '$http', '$q', '$uibModal', function($scope, $http, $q, $uibModal) {
	
	$scope.games = [
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	}, 
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	}, 
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	}, 
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	}, 
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	}, 
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	{
		name : "Overwatch",
		embed: 'http://gifs.com/embed/yogQ7d',
		consoles : ['pc', 'ps4', 'xbox1', 'mac'],
	},
	];





}]);
app.directive('gameThumb', [ '$sce', '$uibModal', function($sce, $uibModal) {
	
	return {
		
		templateUrl: 'partials/game-thumb.blade.php',
		restrict: 'E',
		scope: {
			game: '=',
			tooltipdir: '@'
		},
		
		link: function(scope, element, attrs, tabsCtrl) {
			
			/*************************
			Tooltip
			*************************/		
			scope.showTooltip = true;
			scope.tooltip_gif_url = $sce.trustAsResourceUrl(scope.game.embed);
			var initial_dir = attrs.tooltipdir;
			var bot_top_limit = 100;
			var eTop = $(element).offset().top; //get the offset top of the element
			var tooltip_bottom = false;

			// If the element is within the top limit change the tooltip to bottom
			// If the element is within the bottom limit change tooltip to top
			// If neither - reset to initial direction
			$(element).mouseover(function(){
				if (eTop - $(window).scrollTop() < bot_top_limit) {
					scope.tooltipdir = "bottom";
					tooltip_bottom = true;
				} else if (($(window).height() - (eTop - $(window).scrollTop())) < bot_top_limit) {
					scope.tooltipdir = "top";
				} else {
					scope.tooltipdir = initial_dir;
				}
			});

			// Instantly closes tooltip on leaving element
			$(element).mouseout(function(){
				$('.tooltip').hide();
			});

			scope.open = function () {

				// scope.showTooltip = false;
				$('.tooltip-inner').parent().hide();

				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: './partials/game-modal.blade.php',
					controller: 'GameModalController',
					size: 'lg',
					windowClass: 'game-modal',
					resolve: {
						game: scope.game,
					},
				});

				modalInstance.result.then(function (selectedItem) {
			      $scope.selected = selectedItem;
			    }, function () {
			      scope.showTooltip = true;
			    });

			}

		},
		
	};
}]);
//# sourceMappingURL=all.js.map
