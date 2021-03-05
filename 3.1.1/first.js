/**
 * This method takes a firstname, lastname, age and money account and alerts on the webpage a string that is built.
 * The method checks that the age is a number and if the money amount is positive or negative and also adds a date it was created.
 */

function hej(fname, lname, age, money) {
    var firstName = new String(fname);
    var lastname = new String(lname);
    var ageL = new Number();
    var poor = new Boolean();
    var date = new Date();
    var reg = new RegExp('^\\d+$');

    var fullname = new Array(firstName, lastname);
    if(reg.test(age)) {
        ageL = age;
    }
    else {
        ageL = 0;
        console.log("Input age as a number");
    }
    day = date.getDate();
    year = date.getFullYear();
    month = date.getMonth() +1;
    if (Math.sign(money) > 0) {
        poor = false;
    } else {
        poor = true;
    }
    globalThis.alert("Hello my name is " + fullname[0] + " " + fullname[1] + " and I am " + ageL + " years old.\n I have a positive amount of money: " + poor +"\n This was created " + year + "/" + month + "/" + day);
}

hej("magda", "andersson", 10, 2);