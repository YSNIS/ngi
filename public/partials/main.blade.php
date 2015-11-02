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
<div ng-repeat="game in games">
	<div class="row" ng-if="$index % 3 == 0"></div>
		<game-thumb game="game" tooltipdir="right" ng-if="$index % 3 != 2"></game-thumb>
		<game-thumb game="game" tooltipdir="left" ng-if="$index % 3 == 2"></game-thumb>
	</div ng-if="$index % 3 == 2">
</div>
<div class="test-padding">
</div>
