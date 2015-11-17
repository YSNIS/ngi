<div class="col-md-4">
	<div class="game-thumb" uib-tooltip-template="'partials/game-tooltip.blade.php'" tooltip-placement="[[tooltipdir]]" ng-click="open()" ng-hide="isMobile">
		[[game.name]]
	</div>
	<div class="game-thumb" ng-click="open()" tooltip-is-open="true" ng-if="isMobile">
		[[game.name]]
	</div>
</div>