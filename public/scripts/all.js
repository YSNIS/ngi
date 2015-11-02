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
app.controller("MainController", ['$scope', '$http', '$q', function($scope, $http, $q) {
	
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
app.directive('gameThumb', [ '$sce', function($sce) {
	
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

		},
		
	};
}]);
//# sourceMappingURL=all.js.map
