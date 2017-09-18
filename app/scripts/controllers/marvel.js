angular.module('samWebApp')
    .controller('MarvelCtrl', function () {

        console.log("marvel is ready, my boi!");




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
                alert( "Has seleccionado " + selected1 + " y " + selected2);
            }

            else{
                alert("¡No puedes seccionar al mismo!");
            }

        });





    });
