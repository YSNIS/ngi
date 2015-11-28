<!-- Filter -->
<game-filters></game-filters>

[[tags]]

<div ng-repeat="game in games | filter:gameFilter:game | orderBy:gameSort">
	<div class="row" ng-if="$index % 3 == 0"></div>
		<game-thumb game="game" tooltipdir="right" ng-if="$index % 3 != 2"></game-thumb>
		<game-thumb game="game" tooltipdir="left" ng-if="$index % 3 == 2"></game-thumb>
	</div ng-if="$index % 3 == 2">
</div>

<!-- IMPORTANT REMOVE TEST PADDING FOR LAUNCH-->
<div class="test-padding">
</div>
