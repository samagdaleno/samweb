angular.module('samWebApp')
    .controller('MarvelCtrl', function ($scope, $http, md5) {
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
                        "id1": id1,
                        "id2": id2
                    }),
                    headers: {"X-API-KEY" : "9kypYHDWCs8EbplN6hzBG9GMR0wgIWVV6LTcG2ohX"},
                    success: function(response){
                        console.log("SI FUNCIONÓ!");
                        console.log("SAAAAAM Comics:" + response);
                        commonSeries = response;
                        var seriesA = commonSeries[0];
                        var seriesB = commonSeries[1];

                        var seriesJuntos = seriesA.filter(function(val) {
                            return seriesB.indexOf(val) != -1;
                        });

                        console.log("Series juntos: " + seriesJuntos);

                        if(seriesJuntos == '')
                            $("#list1").append("<li> No hay series juntos :( </li>");

                        for(var i = 0; i < seriesJuntos.length; i++) {
                            var obj = seriesJuntos[i];

                            $("#list1").append("<li>"+ obj +"</li>");
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
                        "id1": id1,
                        "id2": id2
                    }),
                    headers: {"X-API-KEY" : "9kypYHDWCs8EbplN6hzBG9GMR0wgIWVV6LTcG2ohX"},
                    success: function(response){
                        console.log("MADE OF METAL!");
                        console.log("SAAAAAM Comics:" + response);
                        commonComics = response;
                        var comicsA = commonComics[0];
                        var comicsB = commonComics[1];

                        var comicsJuntos = comicsA.filter(function(val) {
                            return comicsB.indexOf(val) != -1;
                        });

                        console.log("Series juntos: " + comicsJuntos);

                        if(comicsJuntos == '')
                            $("#list2").append("<li> No hay comics juntos :( </li>");

                        for(var i = 0; i < comicsJuntos.length; i++) {
                            var obj = comicsJuntos[i];

                            $("#list2").append("<li>"+ obj +"</li>");
                        }
                        console.log("TORNADO OF SOULS!");
                    }
                });
            }

        });



    });
