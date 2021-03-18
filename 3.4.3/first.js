
var xmlhttp = new XMLHttpRequest();
var url = "https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php";


//creates the url for the request, sends GET request to server and catches the response text and outputs it
function addNumber() {
  var number1 = document.getElementById("number1").value;
  var number2 =  document.getElementById("number2").value;
  var prefixUrl = "?number1=" + number1 + "&number2=" + number2;
  var complete = url+prefixUrl;

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var sum = JSON.parse(this.responseText);
      document.getElementById("sum").innerHTML = "The sum of " + number1 + " and " + number2 +  " is " + sum;
    }
  };
  xmlhttp.open("GET", complete, true);
  xmlhttp.send();
}

