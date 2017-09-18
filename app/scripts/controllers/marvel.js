angular.module('samWebApp')
    .controller('MarvelCtrl', function ($scope, $http, md5) {
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

    });
