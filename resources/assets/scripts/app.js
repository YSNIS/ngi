var app = angular.module("app", ['ngRoute', 'ui.bootstrap', 'ngTagsInput'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});