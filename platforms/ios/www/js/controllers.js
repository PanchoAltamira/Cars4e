myApp.controller('ctrlCatalogo', function($scope, $http){
	$http.get('catalogo.json').success(function (data){
		$scope.catalogo = data;
		$scope.conductores = $scope.catalogo.catalogo[0].catCarros;
		$scope.carros = $scope.catalogo.catalogo[0].catCarros;
		$scope.pasajeros = $scope.catalogo.catalogo[0].catPasajeros;
		$scope.message ="MENSAJE";
	});
});

myApp.controller('ctrlActivities', function ($scope, $http, $routeParams) {
    $http.get('catalogo.json').success(function (data) {
		$scope.index = $routeParams.index;
        $scope.activity = data.catalogo[0].catActividades[$routeParams.index];
    });
});