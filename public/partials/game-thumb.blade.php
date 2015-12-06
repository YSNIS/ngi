<div class="col-md-4">
	<!-- Browser -->
	<div class="game-thumb" uib-tooltip-template="'partials/game-tooltip.blade.php'" tooltip-placement="[[tooltipdir]]" ng-click="open()" ng-hide="isMobile">
		<img ng-src="[[logo_image]]" description="Albion Online Logo"/>
		<div class="more-info">
			<p>Click Here For More Info</p>
		</div>
		<!-- Used to attach thumbnail -->
		<div class="game-thumb-layover"></div>
	<!-- Mobile -->
	<div class="game-thumb" ng-click="open()" tooltip-is-open="true" ng-if="isMobile">
		
	</div> <!-- Game-Thumb -->
</div>