<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>New Game Itch</title>
    <script type="text/javascript" src="{{asset('scripts/angular.min.js')}}"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular-route.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="{{asset('scripts/ui-bootstrap-tpls-0.14.3.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('scripts/all.js')}}"></script>
    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
    <link href="//fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body ng-app="app">
    <div class="container">
        <!-- Filter -->
        <div class="filter" ng-include src="'partials/filter.blade.php'"></div>
        <!-- Sidebar -->
        <div class="sidebar" ng-include src="'partials/sidebar.blade.php'"></div>
        <!-- Main View -->
        <div ng-view></div>
    </div>
</body>
</html>