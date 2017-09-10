$(document).ready(function() {
    console.log( "chart is ready, my boi!" );

    var trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [96, 100, 0, 0, 0, 0, 0, 0, 0, 0 ,],
        type: 'scatter'
    };
    var data = [trace1];
    Plotly.newPlot('myDiv', data);


});
