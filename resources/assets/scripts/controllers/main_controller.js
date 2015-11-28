app.controller("MainController", ["$scope", "$http", "$q", "$uibModal", "$filter", function($scope, $http, $q, $uibModal, $filter) {
	
	$scope.released = false;
	$scope.unreleased = false;
	$scope.gameSort = "release";
	$scope.strictSearch = "true";
	$scope.tags = [];	// List of tags to search by

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
	$scope.gameTags = [
		{
			text: "Co-op",
		},
		{
			text: "Co-op Campaign",
		},
		{
			text: "Single Player Campaign",
		},

	]

	// Reminder to hook up to DB
	$scope.games = 
	[
		{
			name : "Lemon Quest",
			embed: "overwatch.gif",
			consoles : ["pc", "ps4", "xbox1"],
			genres: ["fps"],
			release: '2016-04-21',
			tags: ["Co-op", "Single Player Campaign"],
		},
		{
			name : "Tim Rimmlesonn's Revenge",
			embed: "overwatch.gif",
			consoles : ["pc", "ps4", "xbox1"],
			genres: ["fps"],
			release: '2013-04-10',
			tags: ["Co-op"],
		},
		{
			name : "Ajax Quest",
			embed: "overwatch.gif",
			consoles : ["pc", "ps4", "xbox1"],
			genres: ["rpg"],
			release: '2015-04-01',
			tags: ["Co-op Campaign", "Co-op", "Single Player Campaign"],
		},
		{
			name : "Overwatch",
			embed: "overwatch.gif",
			consoles : ["pc", "ps4", "xbox1"],
			genres: ["rpg"],
			release: '2014-02-01',
			tags: ["Single Player Campaign"],
		},
	];

	// Filtering for games 
	$scope.gameFilter = function(game) {

		// List of things to check
		var hasConsole = false;
		var hasGenre = false;
		// This bool deals with release dates, whether it should be included because
		// filtering is looking for unreleased, or all games.  I should figure out a better name.
		var isIncluded = false;	
		var hasTags = false;

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
		// Get a list of genres that are currently checked
		var checkedGenres = [];
		angular.forEach($scope.genres, function(value, key) {
			if (value.checked) {
				checkedGenres.push(value.name);
			}
		});

		// For each game, check if any of their genres are in the array of checked genres
		angular.forEach(game.genres, function(value, key) {
			 if ($.inArray(value, checkedGenres) > -1) {
			 	hasGenre = true;
			 }
		});

		if (checkedGenres.length == 0) {
			hasGenre = true;
		}

		/******************
		Has Tags - (only unreleased or all games)
		******************/
		var tags = []; 
		var tagFound = [];
		var foundUndefined = false;

		// Check if there are any tags to search
		if ($scope.tags.length != 0) {
			// Strict Search - Matching All Tags
			if ($scope.strictSearch) {
				angular.forEach($scope.tags, function(value, key) {
					tagFound = $filter('filter')(game.tags, value.text, false);
					tags.push(tagFound[0]);
					if (tagFound[0] == undefined) {
						foundUndefined = true;
					}
				});
				if (foundUndefined) {
					hasTags = false;
				} else {
					hasTags = true;
				}
			}	

			// Non Strict Searching - Matching At Least 1 Tag
			if (!$scope.strictSearch) {
				angular.forEach($scope.tags, function(value, key) {
					tags += $filter('filter')(game.tags, value.text, false);
				});
				if (tags.length != 0) {
					hasTags = true;
				} else {
					hasTags = false;
				}
			}
		} 
		// If there are no tags to search - just return true
		else {
			hasTags = true;
		}
		
		


		/******************
		Is Included - (only unreleased or all games)
		******************/
		var gameReleased = false;

		// Check if the game has been released yet
		if (moment(game.release).isBefore(moment())) {
			gameReleased = true;
		} else {
			gameReleased = false;
		}

		// If both released and unreleased games are checked, or both unchecked - include
		if (($scope.released && $scope.unreleased) || (!$scope.released && !$scope.unreleased)) {
			isIncluded = true;
		}
		// If the game is released and released is checked - include
		else if (gameReleased && $scope.released) {
			isIncluded = true;
		} 
		// If the game is unreleased and unreleased is checked - incude
		else if (!gameReleased && $scope.unreleased) {
			isIncluded = true;
		} else {
			isIncluded = false;
		}

		/******************
		Final check to see if the game will be filtered out or not
		******************/
		if (hasConsole && hasGenre && isIncluded && hasTags) {
			return game;
		} 
	}; /* END OF GAME FILTERING */

	// Loading Tags for Autocomplete
	$scope.loadTags = function (query) {
		var tags = $filter('filter')($scope.gameTags, {$: query}, false);
		return tags;
	};


}]);