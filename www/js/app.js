var myApp = angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/principal.html',
                controller: 'ctrlCatalogo'
            })
            .when('/#', {
                templateUrl: 'pages/principal.html',
                controller: 'ctrlCatalogo'
            }).when('/actividades', {
                templateUrl: 'pages/actividades.html',
                controller: 'ctrlActivities'
            }).when('/evidencias', {
                templateUrl: 'pages/evidencias.html',
                controller: 'ctrlEvidencias'
            }).when('/camera', {
                templateUrl: 'pages/camera.html',
                controller: 'ctrlEvidencias'

            }).otherwise({
                redirectTo: 'index.html'
            });
    });