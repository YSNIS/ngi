<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>New Game Itch</title>
    <script type="text/javascript" src="{{asset('scripts/angular.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('scripts/ng-tags-input.min.js')}}"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular-route.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="{{asset('scripts/ui-bootstrap-tpls-0.14.3.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('scripts/bootstrap.min.js')}}"></script>
    <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap2-toggle.min.js"></script>
    <script type="text/javascript" src="{{asset('scripts/moment.js')}}"></script>
    <script type="text/javascript" src="{{asset('scripts/all.js')}}"></script>
    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/ng-tags-input.min.css')}}">
    <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap2-toggle.min.css" rel="stylesheet">
    <link href="//fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body ng-app="app">
    <div class="container">
        <!-- Main View -->
        <div ng-view></div>
    </div>
</body>
</html>