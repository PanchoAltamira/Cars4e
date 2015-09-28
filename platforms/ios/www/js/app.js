var myApp  =  angular.module('myApp', ['ngRoute'])
.config(function($routeProvider) {
$routeProvider
    .when('/', {
        templateUrl : 'pages/principal.html',
        controller  : 'ctrlCatalogo'
    })
     .when('/actividades/:index', {
        templateUrl : 'pages/actividades.html',
        controller  : 'ctrlActivities'
    })
    .otherwise({
        redirectTo: 'index.html'
    });
});


