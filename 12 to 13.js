var character = prompt("Enter a character"); // Q1
var asciiCode = character.charCodeAt(0);
if (asciiCode >= 48 && asciiCode <= 57) {
    document.write("Number");
}
else if (asciiCode >= 65 && asciiCode <= 90) {
    document.write("Uppercase letter");
}
else if (asciiCode >= 97 && asciiCode <= 122) {
    document.write("lowercase letter");
}
else {
    alert("Invalid Input");
}




var integer1 = +prompt("Enter a first integer"); //Q#2
var integer2 = +prompt("Enter a second integer");
if (integer1 > integer2) {
    alert(integer1 + " is larger");
}
else if (integer1 < integer2) {
    alert(integer1 + " smaller");
}
else if (integer1 = integer2) {
    alert("both are equal");
}



var num = +prompt("Enter a number"); // Q#3
if (num > 0) {
    alert("positive Number");
}
else if (num < 0) {
    alert("Negative Number");
}
else if (num === 0) {
    alert("zero")
}


var userVowel = prompt("Enter a single character: ");// Q#4
if (userVowel === "a") {
    alert("True");
}
else if (userVowel === "e") {
    alert("True");
}
else if (userVowel === "i") {
    alert("True");
}
else if (userVowel === "o") {
    alert("True");
}
else if (userVowel === "u") {
    alert("True");
}
else {
    alert(false);
}



var password = "lorem123"; // Q#5
var user = prompt("Enter his / her Password");
var validateTwoPassword = prompt("validate original password");
if (user === password && validateTwoPassword === password) {
    alert("Correct password");
}
else if (user === password && validateTwoPassword !== password) {
    alert("Incorrect password");
}


var hour = 13;// Q6
var greeting;

if (hour < 12) {
    greeting = "Good Morning";
}
else if (hour < 18) {
    greeting = "Good Afternoon";
}
else {
    greeting = " Good Evening";
}




var time = prompt("Enter time in 24 hours format e.g :1900 (7pm)"); // Q#7
if (time >= "0000" && time <= "1159") {
    alert("Good Morning");
} else if (time >= "1200" && time <= "1659") {
    alert("Good Afternoon");
} else if (time >= "1700" && time <= "2359") {
    alert("Good Evening");
} else {
    alert("Invalid time");
}

//////////////////////////     DONE    ///////////////////////////////////////