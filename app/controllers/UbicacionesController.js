app.controller('UbicacionesController', ['$scope', 'gasolineras', function ($scope, gasolineras) {
    gasolineras.success(function (data) {
        $scope.gasolineras = data;
    });
    $scope.estados = ["Durango", "Coahuila"];
    $scope.ciudades = ["Matamoros", "Torreon", "Viesca", "Gomez Palacio"];

}]);
