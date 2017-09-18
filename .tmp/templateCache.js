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
    "<h5>Marvel Character Info</h5> <div id=\"dropdown\"> <select class=\"selector\" id=\"super1\"> </select> <select class=\"selector\" id=\"super2\"> </select> </div> <div><button type=\"button\" class=\"btn btn-default\" id=\"marvelBtn\">Dime!</button></div>"
  );

}]);
