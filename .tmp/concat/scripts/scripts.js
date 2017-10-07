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

        var publickey = "ce5a7162468682fcc8b0cb88d351a8bf";
        var timeStamp = new Date();
        var privateKey = '8e0e98d392a4ffa7ffe8e2383d2add69825b9add';
        var hash = md5.createHash(timeStamp + privateKey + publickey);
        var characters = {};

        for (index = 0; index < 15; index++) {
            offset = (index * 100);
            var marvelUrl1 = "https://gateway.marvel.com:443/v1/public/characters?ts="+ timeStamp +"&apikey=" + publickey + "&hash=" + hash + "&limit=100&offset=" + offset;
            fetch(marvelUrl1, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            }).then(function (response) {
                if (response.ok) {
                    response.json().then(function (defs) {
                        var info = defs.data.results;
                        Object.keys(info).forEach(function eachKey(key) {
                            var name = info[key].name,
                                id = info[key].id;
                            characters[name] = id;
                            $("#super1").append("<option value='" + id + "'>" + name + "</option>");
                            $("#super2").append("<option value='" + id + "'>" + name + "</option>");
                        });
                    });
                }
            });
        };






        $("#marvelBtn").click(function() {
            $( "#list1" ).remove();
            $( "#list2" ).remove();

            var select1 =  $('#super1').find(":selected").val();
            var select2 =  $('#super2').find(":selected").val();

            if(select1 == select2)
                alert("No puedes escoger el mismo: " + select1 + ", " + select2);
            else{
                $("#listas").append("<ul id='list1' class='selector'><p><b>Series juntos</b></p></ul>");
                $("#listas").append("<ul id='list2' class='selector'><p><b>Comics juntos</b></p></ul>");



                var seriesUrl = 'https://axqz4qv9k1.execute-api.us-east-1.amazonaws.com/dev/series/',
                    commonSeries,
                    id1 = select1,
                    id2 = select2;


                $.ajax({
                    type: 'POST',
                    url: seriesUrl,
                    data: JSON.stringify({
                        "firstCharacterId": id1,
                        "secondCharacterId": id2
                    }),
                    headers: {"X-API-KEY" : "9kypYHDWCs8EbplN6hzBG9GMR0wgIWVV6LTcG2ohX"},
                    success: function(response){
                        console.log("SI FUNCIONÓ!");
                        console.log(response);
                        commonSeries = response;
                        var seriesA = commonSeries[0].series0;
                        var seriesB = commonSeries[1].series0;

                        var seriesJuntos = seriesA.filter(function(val) {
                            return seriesB.indexOf(val) != -1;
                        });

                        console.log("Series juntos: " + seriesJuntos);

                        if(seriesJuntos == '')
                            $("#list1").append("<li> No hay series juntos :( </li>");

                        for(var i = 0; i < seriesJuntos.length; i++) {
                            var obj = seriesJuntos[i];

                            $("#list1").append("<li>"+ obj +"</li>");

                            console.log(obj);
                        }
                        console.log("SI FUNCIONÓ!");
                    }
                });


                var comicsUrl = 'https://axqz4qv9k1.execute-api.us-east-1.amazonaws.com/dev/comics/',
                    commonComics;


                $.ajax({
                    type: 'POST',
                    url: comicsUrl,
                    data: JSON.stringify({
                        "firstCharacterId": id1,
                        "secondCharacterId": id2
                    }),
                    headers: {"X-API-KEY" : "9kypYHDWCs8EbplN6hzBG9GMR0wgIWVV6LTcG2ohX"},
                    success: function(response){
                        console.log("MADE OF METAL!");
                        console.log(response);
                        commonComics = response;
                        var comicsA = commonComics[0].comics0;
                        var comicsB = commonComics[1].comics0;

                        var comicsJuntos = comicsA.filter(function(val) {
                            return comicsB.indexOf(val) != -1;
                        });

                        console.log("Series juntos: " + comicsJuntos);

                        if(comicsJuntos == '')
                            $("#list2").append("<li> No hay comics juntos :( </li>");

                        for(var i = 0; i < comicsJuntos.length; i++) {
                            var obj = comicsJuntos[i];

                            $("#list2").append("<li>"+ obj +"</li>");

                            console.log(obj);
                        }
                        console.log("TORNADO OF SOULS!");
                    }
                });
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
    "<h5>Marvel Character Info</h5> <div id=\"dropdown\"> <select class=\"selector\" id=\"super1\"> </select> <select class=\"selector\" id=\"super2\"> </select> </div> <br> <div><button type=\"button\" class=\"btn btn-default\" id=\"marvelBtn\">Dime!</button></div> <br> <div id=\"listas\"> <ul id=\"list1\" class=\"selector\"></ul> <ul id=\"list2\" class=\"selector\"> </ul> </div>"
  );

}]);
