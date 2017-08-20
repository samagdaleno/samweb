$(document).ready(function() {
    console.log( "jquery is ready, my boi!" );


     var theHeight = $(window).height();
     var theWidth = $(window).width();
     function beeLeft() {
       $("#b").animate({left: -theHeight}, 4500, "swing", beeRight);
     }
     function beeRight() {
       $("#b").animate({left: theHeight}, 4500, "swing", beeLeft);
     }
     beeRight();

  function flyPlane(){
    plane.css('left', startPos);
    plane.animate({left: -200}, 7000, 'linear')
  };

  var screenWidth = $(document).width();
  var startPos = screenWidth;
  var plane = $('#plane')
  flyPlane();
  setInterval(function() {
    flyPlane();
  }, 9000);


});

'use strict';

/**
 * @ngdoc overview
 * @name samWebApp
 * @description
 * # samWebApp
 *
 * Main module of the application.
 */
angular
  .module('samWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/assignments', {
        templateUrl: 'views/assignments.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name samWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the samWebApp
 */
angular.module('samWebApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name samWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the samWebApp
 */
angular.module('samWebApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('samWebApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p id=\"samTitle\"><a href=\"/#!/assignments\"><u>Samuel I. Magdaleno Álvarez</u> </a> </p> <br> <p>Fan de Radiohead, <i>A Song of Ice and Fire</i> y chocolates en la clase.</p> <p>Mi mamá me dijo una vez que <a href=\"https://www.instagram.com/p/r8bybwsVxy/?taken-by=sammagdaleno\" target=\"_blank\"><u>me parecía al mocha-orejas</u></a>.</p> <p><b>Matrícula: </b> 18416, <b>Actualmente leyendo: </b> <a href=\"https://en.wikipedia.org/wiki/The_Handmaid%27s_Tale\" target=\"_blank\"> <u>The Handmaid's Tale (Margaret Atwood)</u> </a>.</p>"
  );


  $templateCache.put('views/assignments.html',
    "<p id=\"samTitle\"><a href=\"/#!/assignments\"><u>Tareas</u> </a> </p> <br> <br> <p>Cloud Computing</p> <p id=\"samTitle\"><a href=\"https://drive.google.com/file/d/0B0JFhGMtHi6eMkFkNDFwMWxubFk/view?usp=sharing\" target=\"_blank\"><u>Tarea 1</u> </a> </p> <br> <br> <p>Repositorio de GitHub</p> <p id=\"samTitle\"><a href=\"https://github.com/samagdaleno/samweb/\" target=\"_blank\"><u>Samweb Tarly</u> </a> </p>"
  );


  $templateCache.put('views/main.html',
    "<p id=\"samTitle\"><a href=\"#/\"><u>Sam Magdaleno</u> </a> </p> <br> <p> Sam es estudiante de Ingeniería en Ciencias Computacionales en Cetys Universidad,<br> actualmente en su último año. Antes de eso, medicina en UABC. Antes de eso, Cetys otra vez.<br> Actualmente trabaja en Avandel pero no le gusta usar Salesforce. </p> <br> <p>Ve mi tarea <a href=\"https://drive.google.com/file/d/0B0JFhGMtHi6eMkFkNDFwMWxubFk/view?usp=sharing\" target=\"_blank\"><u>más reciente</u></a>.</p>"
  );

}]);
