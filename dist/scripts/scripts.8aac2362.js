$(document).ready(function(){function a(){$("#b").animate({left:-d},4500,"swing",b)}function b(){$("#b").animate({left:d},4500,"swing",a)}function c(){g.css("left",f),g.animate({left:-200},7e3,"linear")}console.log("jquery is ready, my boi!");var d=$(window).height();$(window).width();b();var e=$(document).width(),f=e,g=$("#plane");c(),setInterval(function(){c()},9e3)}),angular.module("samWebApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/assignments",{templateUrl:"views/assignments.html",controller:"AboutCtrl",controllerAs:"about"}).when("/chart",{templateUrl:"views/chart.html",controller:"ChartCtrl",controllerAs:"chart"}).when("/marvel",{templateUrl:"views/marvel.html",controller:"MarvelCtrl",controllerAs:"marvel"}).otherwise({redirectTo:"/"})}]),angular.module("samWebApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("samWebApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("samWebApp").controller("ChartCtrl",function(){console.log("chart is ready, my boi!");var a={x:[1,2,3],y:[96,100,100],type:"scatter"},b=a.y;console.log(b);var c=[a];Plotly.newPlot("myDiv",c)}),angular.module("samWebApp").controller("MarvelCtrl",function(){console.log("marvel is ready, my boi!");var a="https://svxkxr0g6b.execute-api.us-east-1.amazonaws.com/prod/samservice-dev-marvelcharacters";fetch(a,{method:"GET",headers:{Accept:"application/json"}}).then(function(a){a.ok&&a.json().then(function(a){for(var b=0;b<a.length;b++){var c=a[b];$("#super1").append("<option value='"+c+"'>"+c+"</option>"),$("#super2").append("<option value='"+c+"'>"+c+"</option>"),console.log(c)}})}),$("#marvelBtn").click(function(){var a=$("#super1").find(":selected").text(),b=$("#super2").find(":selected").text();b!=a?alert("Has seleccionado "+a+" y "+b):alert("¡No puedes seccionar al mismo!")})}),angular.module("samWebApp").run(["$templateCache",function(a){"use strict";a.put("views/about.html","<script>ga('set', 'page', '/about.html');\n"+'    ga(\'send\', \'pageview\');</script> <p id="samTitle"><a href="/#!/assignments"><u>Samuel I. Magdaleno Álvarez</u> </a> </p> <br> <p>Fan de Radiohead, <i>A Song of Ice and Fire</i> y chocolates en la clase.</p> <p>Mi mamá me dijo una vez que <a href="https://www.instagram.com/p/r8bybwsVxy/?taken-by=sammagdaleno" target="_blank"><u>me parecía al mocha-orejas</u></a>.</p> <p><b>Matrícula: </b> 18416, <b>Actualmente leyendo: </b> <a href="https://en.wikipedia.org/wiki/The_Handmaid%27s_Tale" target="_blank"> <u>The Handmaid\'s Tale (Margaret Atwood)</u> </a>.</p>'),a.put("views/assignments.html","<script>ga('set', 'page', '/assignments.html');\n"+'    ga(\'send\', \'pageview\');</script> <p id="samTitle"><a href="/#!/assignments"><u>Tareas</u> </a> </p> <br> <br> <p>Cloud Computing</p> <p><a href="https://drive.google.com/file/d/0B0JFhGMtHi6eMkFkNDFwMWxubFk/view?usp=sharing" target="_blank"><u>Tarea 1</u> </a> </p> <p><a href="https://drive.google.com/file/d/0B0JFhGMtHi6eaTlrTHgzZnpkd2c/view?usp=sharing" target="_blank"><u>Tarea 2</u> </a> </p> <p><a href="https://docs.google.com/document/d/1Z7B7EI8Yhr27rXppbbga2keg-9MtAbShD-LNiKn3Pm8/edit?usp=sharing" target="_blank"><u>Tarea 3</u> </a> </p> <br> <br> <p>Repositorios de GitHub</p> <p><a href="https://github.com/samagdaleno/samweb/" target="_blank"><u>Samweb Tarly</u> </a> </p> <p><a href="https://github.com/samagdaleno/tareasCloud/" target="_blank"><u>Tareas Cloud</u> </a> </p>'),a.put("views/chart.html",'<p>Esta es una gráfica!</p> <div id="myDiv"><!-- Plotly chart will be drawn inside this DIV --></div>'),a.put("views/main.html","<script>ga('set', 'page', '/main.html');\n"+'    ga(\'send\', \'pageview\');</script> <p id="samTitle"><a href="#/"><u>Sam Magdaleno</u> </a> </p> <br> <p> Estudiante de Ingeniería en Ciencias Computacionales en Cetys Universidad,<br> cursando el último año. Antes de eso, medicina en UABC. Antes de eso, Cetys otra vez.<br> Actualmente trabajo en Avandel como ingeniero jr. </p> <br> <p>Ve mi tarea <a href="https://docs.google.com/document/d/1Z7B7EI8Yhr27rXppbbga2keg-9MtAbShD-LNiKn3Pm8/edit?usp=sharing" target="_blank"><u>más reciente</u></a>.</p>'),a.put("views/marvel.html",'<h5>Marvel Character Info</h5> <div id="dropdown"> <select class="selector" id="super1"> </select> <select class="selector" id="super2"> </select> </div> <div><button type="button" class="btn btn-default" id="marvelBtn">Dime!</button></div>')}]);