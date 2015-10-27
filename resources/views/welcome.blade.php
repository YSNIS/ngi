<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>New Game Itch</title>
    <link href="//fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="{{asset('scripts/angular.min.js')}}"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular-route.js"></script>
    <script type="text/javascript" src="{{asset('scripts/all.js')}}"></script>
    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
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