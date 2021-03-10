// when document is ready initialize resize, click, keypress events. The link is prevented from doing what it should do
$(document).ready(function() {
    document.getElementsByTagName("body")[0].onresize = function() {resize()};
    document.getElementsByTagName("body")[0].onclick = function(){coordinates()};
    document.getElementsByTagName("body")[0].onkeypress = function(){changeInputColor()};
    document.getElementById("link").addEventListener("click", function(event){
        event.preventDefault()});
})

// "your name will be shown here" is removed and we add a name fetched from input id namn and outputted in the p name tag
// then we create a p tag that is appended with a text and then we append it to the name id. When clicking on button the text content is changed to "change name"
function addName() {

    var replace = document.getElementById("placehold");
    if(replace != null) {
        replace.remove();
    }
    var name = document.getElementById("namn").value;
    document.getElementById("name").innerHTML = name

    var tag = document.createElement("p");
    var text = document.createTextNode("Now name is set");
    tag.appendChild(text);
    var element = document.getElementById("name");
    element.append(tag);

    document.getElementById("addButton").textContent = "Change name"
}

//sets a timestamp to when name was last changed
$(document).ready(function(){
    $("input").change(function(){
        const time = new Date().toLocaleTimeString();
        document.getElementById("change").innerHTML = "Last updated: " + time;
    });
});

//adds functionality to change color of p tags and removes it if you click any button
$(document).ready(function(){
    $("p").on("click", function(){
      $(this).css("background-color", "gray");
    });
    $("button").click(function(){
      $("p").off("click");
    });
});

//adds the color red when hovering over p tags
$(document).ready(function(){
    $("p").hover(function(){
        $(this).css("background-color", "red");
    });
});

//adds styling class to a button when choosing dark mode
function changeMode() {
    var button = document.getElementById("addButton");
    if(document.getElementById("dark-mode").checked) {  
        button.classList.add("buttonStyled");
    } else {
        button.classList.remove("buttonStyled");
    }
}

//fontsize of p is 30px when hovering
function bigP(x) {
    x.style.fontSize = "30px";
}

//fontsize of p is 10px when not hovering
function normalP(x) {
    x.style.fontSize = "10px";
}

//when resizing window a text is added
function resize() {
    document.getElementById("resize").innerHTML= "resized";
}

//when typing the input color is changed
function changeInputColor() {
    document.getElementById("namn").style.backgroundColor = "gray";
}

//outputs coordinates of mouse when clicking
function coordinates() {
  document.getElementById("coordinates").innerHTML = "Coordinates: x: " + event.pageX + " y: " + event.pageY;
}
