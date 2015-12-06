<nav class="navbar navbar-default game-filters">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="">New Game Itch</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Consoles <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li ng-repeat="console in consoles"><label class=""><input type="checkbox" ng-checked="console.checked" ng-model="console.checked" /> [[ console.name ]]</label></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Genres <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li ng-repeat="genre in genres"><label class=""><input type="checkbox" ng-checked="genre.checked" ng-model="genre.checked" /> [[ genre.name ]]</label></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Release <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><label class=""><input type="checkbox" ng-model="released" /> Released</label></li>
                        <li><label class=""><input type="checkbox" ng-model="unreleased" /> Unreleased</label></li>
                    </ul>
                </li>
            </ul>
            <button type="button" class="btn btn-default navbar-btn" ng-click="showTags = !showTags">Tags</button>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    <tags-input
        ng-model="tags" 
        add-from-autocomplete-only="true"
        replace-spaces-with-dashes="false"
        add-on-paste="true"
        class="col-md-11"
        ng-show="showTags">    
        <auto-complete 
            load-on-focus="true"
            load-on-empty="true"
            min-length="0"
            source="loadTags($query)">
        </auto-complete>
    </tags-input>
    <input type="checkbox" ng-model="strictSearch">Strict
</nav>