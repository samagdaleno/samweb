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
    'ngTouch',
     'ngMd5'
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
      .when('/chart', {
            templateUrl: 'views/chart.html',
            controller: 'ChartCtrl',
            controllerAs: 'chart'
        })
      .when('/marvel', {
        templateUrl: 'views/marvel.html',
        controller: 'MarvelCtrl',
        controllerAs: 'marvel'
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

angular.module('samWebApp')
    .controller('ChartCtrl', function () {
        //var AWS = require('aws-sdk');

        console.log("chart is ready, my boi!");
        var trace1 = {
            x: [1, 2, 3],
            y: [96, 100, 100],
            type: 'scatter'
        };
        var prom = trace1.y;
        console.log(prom);
        var data = [trace1];
        Plotly.newPlot('myDiv', data);



    });

angular.module('samWebApp')
    .controller('MarvelCtrl', ["$scope", "$http", "md5", function ($scope, $http, md5) {
        console.log("marvel is ready, my boi!");

        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var limit = 100;
        var offset = 0;
        var characterNames = [];
        var characterComics = new Map();
        var characterSeries = new Map();
        var timeStamp = new Date();
        var privateKey = '8e0e98d392a4ffa7ffe8e2383d2add69825b9add';
        var publicKey = 'ce5a7162468682fcc8b0cb88d351a8bf';
        var hash = md5.createHash(timeStamp + privateKey + publicKey);
        var exit = false;
        while (offset <= limit * 14) {
            var url = "https://gateway.marvel.com:443/v1/public/characters?ts=" + timeStamp + "&apikey=" + publicKey + "&hash=" + hash + "&limit=" + limit + "&offset=" + offset;
            $http.get(url)
                .then(function (response) {
                    var info = response.data;
                    var results = info.data.results;
                    for (var i = 0; i < results.length; i++) {
                        var character = {
                            name: results[i].name,
                            comics: results[i].comics,
                            series: results[i].series
                        };
                        characterNames.push(character.name);
                        characterComics.set(character.name, character.comics);
                        characterSeries.set(character.name, character.series);
                    }
                })
                .catch(function (data) {
                    console.log('An error has occurred. ' + data);
                    exit = true
                });
            if (exit) { break; }
            offset += 100;
        }


        var url = 'https://svxkxr0g6b.execute-api.us-east-1.amazonaws.com/prod/samservice-dev-marvelcharacters';
        var superList;

        fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            }
        ).then(function(response) {
            if (response.ok) {
                response.json().then(function (json){
                    for(var i = 0; i < json.length; i++) {
                        var obj = json[i];

                        $("#super1").append("<option value='"+ obj +"'>"+ obj + "</option>");
                        $("#super2").append("<option value='"+ obj +"'>"+ obj + "</option>");

                        console.log(obj);
                    }
                });
            }
        });


        $("#marvelBtn").click(function() {


            var selected1 = $('#super1').find(":selected").text();
            var selected2 = $('#super2').find(":selected").text();
            if(selected2 != selected1){
                $( "#list1" ).remove();
                $( "#list2" ).remove();

                $("#listas").append("<ul id='list1' class='selector'><p><b>Series juntos</b></p></ul>");
                $("#listas").append("<ul id='list2' class='selector'><p><b>Comics juntos</b></p></ul>");

                alert( "Has seleccionado " + selected1 + " y " + selected2);
                var comics1 = characterComics.get(selected1);
                var comics2 = characterComics.get(selected2);
                var series1 = characterSeries.get(selected1);
                var series2 = characterSeries.get(selected2);
                var comicNames = [];
                var seriesNames = [];
                for (var i = 0; i < comics1.items.length; i++) {
                    comicNames.push(comics1.items[i].name);
                }
                for (var i = 0; i < series1.items.length; i++) {
                    seriesNames.push(series1.items[i].name);
                }
                for (var i = 0; i < comics2.items.length; i++) {
                    if (comicNames.includes(comics2.items[i].name)) {
                        !$scope.comics.push(comics2.items[i].name);
                    }
                }
                for (var i = 0; i < series2.items.length; i++) {
                    if (seriesNames.includes(series2.items[i].name)) {
                        !$scope.series.push(series2.items[i].name);
                    }
                }
                console.log(seriesNames);
                console.log(comicNames);

                for(var i = 0; i < seriesNames.length; i++) {
                    var obj = seriesNames[i];
                    $("#list1").append("<li>"+ obj +"</li>");
                }

                for(var i = 0; i < comicNames.length; i++) {
                    var obj = comicNames[i];
                    $("#list2").append("<li>"+ obj +"</li>");
                }
            }

            else{
                alert("¡No puedes seccionar al mismo!");
            }
        });

    }]);

angular.module('samWebApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<script>ga('set', 'page', '/about.html');\n" +
    "    ga('send', 'pageview');</script> <p id=\"samTitle\"><a href=\"/#!/assignments\"><u>Samuel I. Magdaleno Álvarez</u> </a> </p> <br> <p>Fan de Radiohead, <i>A Song of Ice and Fire</i> y chocolates en la clase.</p> <p>Mi mamá me dijo una vez que <a href=\"https://www.instagram.com/p/r8bybwsVxy/?taken-by=sammagdaleno\" target=\"_blank\"><u>me parecía al mocha-orejas</u></a>.</p> <p><b>Matrícula: </b> 18416, <b>Actualmente leyendo: </b> <a href=\"https://en.wikipedia.org/wiki/The_Handmaid%27s_Tale\" target=\"_blank\"> <u>The Handmaid's Tale (Margaret Atwood)</u> </a>.</p>"
  );


  $templateCache.put('views/assignments.html',
    "<script>ga('set', 'page', '/assignments.html');\n" +
    "    ga('send', 'pageview');</script> <p id=\"samTitle\"><a href=\"/#!/assignments\"><u>Tareas</u> </a> </p> <br> <br> <p>Cloud Computing</p> <p><a href=\"https://drive.google.com/file/d/0B0JFhGMtHi6eMkFkNDFwMWxubFk/view?usp=sharing\" target=\"_blank\"><u>Tarea 1</u> </a> </p> <p><a href=\"https://drive.google.com/file/d/0B0JFhGMtHi6eaTlrTHgzZnpkd2c/view?usp=sharing\" target=\"_blank\"><u>Tarea 2</u> </a> </p> <p><a href=\"https://docs.google.com/document/d/1Z7B7EI8Yhr27rXppbbga2keg-9MtAbShD-LNiKn3Pm8/edit?usp=sharing\" target=\"_blank\"><u>Tarea 3</u> </a> </p> <br> <br> <p>Repositorios de GitHub</p> <p><a href=\"https://github.com/samagdaleno/samweb/\" target=\"_blank\"><u>Samweb Tarly</u> </a> </p> <p><a href=\"https://github.com/samagdaleno/tareasCloud/\" target=\"_blank\"><u>Tareas Cloud</u> </a> </p>"
  );


  $templateCache.put('views/chart.html',
    "<p>Esta es una gráfica!</p> <div id=\"myDiv\"><!-- Plotly chart will be drawn inside this DIV --></div>"
  );


  $templateCache.put('views/main.html',
    "<script>ga('set', 'page', '/main.html');\n" +
    "    ga('send', 'pageview');</script> <p id=\"samTitle\"><a href=\"#/\"><u>Sam Magdaleno</u> </a> </p> <br> <p> Estudiante de Ingeniería en Ciencias Computacionales en Cetys Universidad,<br> cursando el último año. Antes de eso, medicina en UABC. Antes de eso, Cetys otra vez.<br> Actualmente trabajo en Avandel como ingeniero jr. </p> <br> <p>Ve mi tarea <a href=\"https://docs.google.com/document/d/1Z7B7EI8Yhr27rXppbbga2keg-9MtAbShD-LNiKn3Pm8/edit?usp=sharing\" target=\"_blank\"><u>más reciente</u></a>.</p>"
  );


  $templateCache.put('views/marvel.html',
    "<h5>Marvel Character Info</h5> <div id=\"dropdown\"> <select class=\"selector\" id=\"super1\"> </select> <select class=\"selector\" id=\"super2\"> </select> </div> <div><button type=\"button\" class=\"btn btn-default\" id=\"marvelBtn\">Dime!</button></div> <div id=\"listas\"> <ul id=\"list1\" class=\"selector\"></ul> <ul id=\"list2\" class=\"selector\"> </ul> </div>"
  );

}]);
