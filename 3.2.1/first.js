//Preloads pictures for the site
function preload(url) {
    var img = new Image();
    img.src = url;
}

//If clicking on the button the picture changes
$(document).ready(function(){
    $("button").click(function(){
      $("#img1").attr("src", "tid.png");
    });
});

//Hovering shows another picture
$(document).ready(function(){
  $("#img2").on({
    "mouseover" : function() {
       this.src = 'plugg.jpg';
     },
     "mouseout" : function() {
       this.src='tid.png';
     }
   });
});