//Preloads pictures for the site
function preload(url) {
    var img = new Image();
    img.src = url;
}

//Toggles between hiding and showing element
$(document).ready(function(){
  $("#toggleButton").click(function(){
    $("#img1").toggle();
  });
});

//Shows the image
$(document).ready(function(){
  $("#showButton").click(function(){
    $("#img1").show();
  });
});

//Hides the image
$(document).ready(function(){
  $("#hideButton").click(function(){
    $("#img1").hide();
  });
});

//Fades in the image
$(document).ready(function() {
  $("#fadeInButton").click(function(){
    $("#img2").fadeIn(3000);
  });
});

//Fades out the image
$(document).ready(function() {
  $("#fadeOutButton").click(function(){
    $("#img2").fadeOut(3000);
  });
});

//Toggles between fading in and out image
$(document).ready(function() {
  $("#fadeToggle").click(function(){
    $("#img2").fadeToggle(3000);
  });
});

//Fades to 0.5 opacity
$(document).ready(function() {
  $("#fadeTo").click(function(){
    $("#img2").fadeTo(3000, 0.5);
  });
});

//Animates the picutre to a width of 200px and alerts when it is done
$(document).ready(function() {
  $("#small").click(function(){
    $("#img2").animate({
      width: "200px"
      }, 
      {
        easing: "linear",
        complete: function(){
          alert('animation done');
        }
      });
    });
});
