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