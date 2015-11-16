<!-- Not sure what this line does...I should probably figure that out -->
<script language="JavaScript">
<!--
function autoResize(id){
    var newheight;
    var newwidth;

    if(document.getElementById){
        newheight = document.getElementById(id).contentWindow.document .body.scrollHeight;
        newwidth = document.getElementById(id).contentWindow.document .body.scrollWidth;
    }

    document.getElementById(id).height = (newheight) + "px";
    document.getElementById(id).width = (newwidth) + "px";
}
//-->
</script>
</div>

<div class="search-bar">
    <p>Consoles</p>
    <div data-ng-repeat="console in consoles">
        <!-- record that this customer has been selected -->
        <input type="checkbox" ng-checked="console.checked" ng-model="console.checked" /> [[ console.name ]]
    </div>
    <p>Genres</p>
    <div data-ng-repeat="genre in genres">
        <!-- record that this customer has been selected -->
        <input type="checkbox" ng-checked="genres.checked" ng-model="genre.checked" /> [[ genre.name ]]
    </div>
</div>

<div ng-repeat="game in games | filter:gameFilter:game">
	<div class="row" ng-if="$index % 3 == 0"></div>
		<game-thumb game="game" tooltipdir="right" ng-if="$index % 3 != 2"></game-thumb>
		<game-thumb game="game" tooltipdir="left" ng-if="$index % 3 == 2"></game-thumb>
	</div ng-if="$index % 3 == 2">
</div>

<!-- IMPORTANT REMOVE TEST PADDING FOR LAUNCH-->
<div class="test-padding">
</div>
