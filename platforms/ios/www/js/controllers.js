var myApp  =  angular.module('myApp', []);
myApp.controller('ctrlCatalogo', function($scope, $http){
    $http.get('catalogo.json').success(function (data){
        $scope.catalogo = data;
      	$scope.conductores = $scope.catalogo.catalogo[0].catCarros;
      	$scope.carros = $scope.catalogo.catalogo[0].catCarros;
      	$scope.pasajeros = $scope.catalogo.catalogo[0].catPasajeros;
    });
});