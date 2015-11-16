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
			embed: "http://gifs.com/embed/yogQ7d",
			consoles : ["pc", "ps4", "xbox1"],
			genres: ["fps"],
		}, 
		{
			name : "Rime Crime",
			embed: "http://gifs.com/embed/yogQ7d",
			consoles : ["pc"],
			genres: ["rpg"],
		},
		{
			name : "Tim Limmer",
			embed: "http://gifs.com/embed/yogQ7d",
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
	    
	}




}]);