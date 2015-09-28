var myApp  =  angular.module('myApp', ['ngRoute'])
.config(function($routeProvider) {
$routeProvider
    .when('/', {
        templateUrl : 'http://localhost/Cars4e/platforms/ios/www/pages/principal.html',
        controller  : 'ctrlCatalogo'
    })
     .when('/actividades', {
        templateUrl : 'http://localhost/Cars4e/platforms/ios/www/pages/actividades.html',
        controller  : 'ctrlCatalogo'
    })
    .otherwise({
        redirectTo: 'index.html'
    });
});


