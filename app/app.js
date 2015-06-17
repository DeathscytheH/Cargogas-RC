var app = angular.module('CargogasApp', ['ngRoute', 'ui.bootstrap', 'ngMap']);
/**/
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/bienvenido.html'
    })
    .when('/bolsa-de-trabajo', {
      templateUrl: 'views/bolsadetrabajo.html'
    })
    .when('/contacto', {
      templateUrl: 'views/contacto.html'
    })
    .when('/faq', {
      templateUrl: 'views/faq.html'
    })
    .when('/promociones', {
      templateUrl: 'views/promociones.html'
    })
    .when('/credito', {
      templateUrl: 'views/credito.html'
    })
    .when('/prepago', {
      templateUrl: 'views/prepago.html'
    })
    .when('/ubicaciones', {
      controller: 'UbicacionesController',
      templateUrl: 'views/ubicaciones.html'
    })
    .when('/mapas', {
      templateUrl: 'views/mapas.html'
    })  
    .when('/forma', {
      controller: 'ContactController',
      templateUrl: 'views/contactform.html'
    })
  
    .otherwise({
      redirectTo: '/'
    });
});
