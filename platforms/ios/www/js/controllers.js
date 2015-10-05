myApp.controller('ctrlCatalogo', function($scope, $http){
	$http.get('catalogo.json').success(function (data){
		$scope.catalogo = data;
		$scope.conductores = $scope.catalogo.catalogo[0].catCarros;
		$scope.carros = $scope.catalogo.catalogo[0].catCarros;
		$scope.pasajeros = $scope.catalogo.catalogo[0].catPasajeros;
		$scope.message ="MENSAJE";
	});
});

myApp.controller('ctrlActivities', function ($scope, $http) {
    $http.get('catalogo.json').success(function (data) {
        $scope.length = data.catalogo[0].catActividades.length;
        if ($scope.index < $scope.length) {
            $scope.activity = data.catalogo[0].catActividades[$scope.index];
            $scope.index++;
        }
    });

    $scope.next = function ()
    {
        $http.get('catalogo.json').success(function (data) {
            $scope.length = data.catalogo[0].catActividades.length;
            if ($scope.index < $scope.length)
            {
                $scope.activity = data.catalogo[0].catActividades[$scope.index];
                $scope.index++;
            }
        });
    }
});