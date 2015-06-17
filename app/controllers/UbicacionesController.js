app.controller('UbicacionesController', ['$scope', 'gasolineras', function ($scope, gasolineras) {
    gasolineras.success(function (data) {
        $scope.gasolineras = data;
    });
    $scope.estados = ["Durango", "Coahuila"];
    $scope.$watch('myEstado', function(newVal) {
        if (newVal == 'Durango') $scope.ciudades = ['Gomez Palacio', 'Ceballos'];
    });
    $scope.$watch('myEstado', function(newVal) {
        if (newVal == 'Coahuila') $scope.ciudades = ["Matamoros", "Torreon", "Viesca"];
    });
}]);