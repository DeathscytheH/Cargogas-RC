app.factory('gasolineras', ['$http', function($http) {
  return $http.get('data/gas.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
