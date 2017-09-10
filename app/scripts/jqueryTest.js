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
