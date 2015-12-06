app.factory('Games', function(){
	
	var Games = {};

	Games.games = [
		{
			name : "Albion Online",
			tooltip: "overwatch.gif",
			logo: "Albion Online.png",
			consoles : ["pc", "ps4", "xbox1"],
			genres: ["fps"],
			release: '2016-04-21',
			tags: ["Co-op", "Single Player Campaign"],
		},
		{
			name : "Tim Rimmlesonn's Revenge",
			tooltip: "overwatch.gif",
			logo: "Albion Online.png",
			consoles : ["pc", "ps4", "xbox1"],
			genres: ["fps"],
			release: '2013-04-10',
			tags: ["Co-op"],
		},
		{
			name : "Ajax Quest",
			tooltip: "overwatch.gif",
			logo: "Albion Online.png",
			consoles : ["pc", "ps4", "xbox1"],
			genres: ["rpg"],
			release: '2015-04-01',
			tags: ["Co-op Campaign", "Co-op", "Single Player Campaign"],
		},
		{
			name : "Overwatch",
			tooltip: "overwatch.gif",
			logo: "Albion Online.png",
			consoles : ["pc", "ps4", "xbox1"],
			genres: ["rpg"],
			release: '2014-02-01',
			tags: ["Single Player Campaign"],
		},
	];

	return Games;
		
});