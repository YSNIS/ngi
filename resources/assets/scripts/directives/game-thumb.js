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