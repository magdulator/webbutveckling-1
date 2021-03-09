var popups;
var questions;

//popup function, opens popup.html and closes it after 5 seconds
function alertTest() {
    myWindow = window.open("popup.html");
    setTimeout(close(myWindow), 5000);
}

//Asks for name and if you like cheese then displays answer
function echoName() {
    var person = window.prompt("Write your name");
    window.alert(person);
}

//start interval with popup.html
function startPopups() {
    popups = setInterval(alertTest, 5000);
}

//call echoName after 3 seconds
function startTimeout() {
    questions = setTimeout(echoName, 3000);
}

//stops the interval with popups
function stopPopups() {
    clearInterval(popups);   
}

//hinders the question to start executing
function stopTimeout() {
    stopTime = window.confirm("stop?");
    if (stopTime) {
        clearTimeout(questions);
    }
}



