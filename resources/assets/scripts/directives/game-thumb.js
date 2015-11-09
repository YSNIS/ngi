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

				scope.showTooltip = false;

				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: '/partials/game-modal.blade.php',
					controller: 'GameModalController',
					size: 'lg',
					windowClass: 'game-modal',
					resolve: {
						game: scope.game,
					},
				});

				modalInstance.result.then(function () {
					console.log('hi');
					scope.showTooltip = true;
				});

			}

		},
		
	};
}]);