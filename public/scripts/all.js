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
app.directive('gameFilters', [ '$sce', '$uibModal', function($sce, $uibModal) {
	
	return {
		
		templateUrl: 'partials/filter.blade.php',
		restrict: 'E',
		link: function(scope, element, attrs, tabsCtrl) {
			$('.dropdown-menu').click(function(event){
			     event.stopPropagation();
			 });
		},
		
	};
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
			scope.gif_poster = "//" + scope.game.embed + ".jpg";
			scope.gif_webm = "//" + scope.game.embed + ".webm"; 
			scope.gif_mp4 = "//" + scope.game.embed + ".mp4";
			scope.gif_poster = $sce.trustAsResourceUrl(scope.gif_poster);
			scope.gif_webm = $sce.trustAsResourceUrl(scope.gif_webm);
			scope.gif_mp4 = $sce.trustAsResourceUrl(scope.gif_mp4);
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
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
					scope.tooltipdir = "right";
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
app.controller("MainController", ["$scope", "$http", "$q", "$uibModal", function($scope, $http, $q, $uibModal) {
	
	// Reminder to hook up to DB
	$scope.genres = [
		{
			name : "rpg",
		},
		{
			name : "action/adventure",
		},
		{
			name : "fps",
		},
		{
			name : "platformer",
		},
	];

	// Reminder to hook up to DB
	$scope.consoles = [
		{
			name : "xbox1",
		},
		{
			name : "ps4",
		},
		{
			name : "pc",
		},
		{
			name : "mac",
		},
	]

	// Reminder to hook up to DB
	$scope.games = 
	[
		{
			name : "Overwatch",
			embed: "i.imgur.com/6n2XNiX",
			consoles : ["pc", "ps4", "xbox1"],
			genres: ["fps"],
		}, 
		{
			name : "Rime Crime",
			embed: "i.imgur.com/6n2XNiX",
			consoles : ["pc"],
			genres: ["rpg"],
		},
		{
			name : "Tim Limmer",
			embed: "i.imgur.com/6n2XNiX",
			consoles : ["pc", "ps4", "xbox1", "mac"],
			genres: ["action/adventure"],
		},
	];

	$scope.gameFilter = function(game) {

		// List of things to check
		var hasConsole = false;
		var hasGenre = false;

		/******************
		CONSOLES
		******************/
		// Get a list of consoles that are currently checked
		var checkedConsoles = [];
		angular.forEach($scope.consoles, function(value, key) {
			if (value.checked) {
				checkedConsoles.push(value.name);
			}
		});
		// For each game, check if any of their consoles are in the array of checked consoles
		angular.forEach(game.consoles, function(value, key) {
			 if ($.inArray(value, checkedConsoles) > -1) {
			 	hasConsole = true;
			 }
		});

		if (checkedConsoles.length == 0) {
			hasConsole = true;
		}

		/******************
		GENRES
		******************/
		// Get a list of consoles that are currently checked
		var checkedGenres = [];
		angular.forEach($scope.genres, function(value, key) {
			if (value.checked) {
				checkedGenres.push(value.name);
			}
		});

		// For each game, check if any of their consoles are in the array of checked consoles
		angular.forEach(game.genres, function(value, key) {
			 if ($.inArray(value, checkedGenres) > -1) {
			 	hasGenre = true;
			 }
		});

		if (checkedGenres.length == 0) {
			hasGenre = true;
		}

		if (hasConsole && hasGenre) {
			return game;
		} 
	} /* END OF GAME FILTERING */


}]);

//# sourceMappingURL=all.js.map
