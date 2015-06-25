var app = angular.module('CargogasApp', ['ngRoute', 'ui.bootstrap', 'reCAPTCHA']);
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
      templateUrl: 'views/credito.html'
    })
    .when('/ubicaciones', {
      controller: 'UbicacionesController',
      templateUrl: 'views/ubicaciones.html'
    }) 
    .when('/forma', {
      controller: 'ContactController',
      templateUrl: 'views/contactform.html'
    })
    .when('/aviso', {
      templateUrl: 'views/credito.html'
    })  
    .otherwise({
      redirectTo: '/'
    });
});
app.config(function (reCAPTCHAProvider) {
    // required: please use your own key :)
    reCAPTCHAProvider.setPublicKey('6LcdgQgTAAAAAIQzeHcrRbuT-ebesOerMyhx2tfK');

    // optional: gets passed into the Recaptcha.create call
    reCAPTCHAProvider.setOptions({
        theme: 'clean'
    });
});