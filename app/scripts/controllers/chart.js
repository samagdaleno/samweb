angular.module('samWebApp')
    .controller('ChartCtrl', function () {

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
