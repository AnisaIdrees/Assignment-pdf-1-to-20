var city = "Karachi";//Q1
var userInput = prompt("Enter your  city");
if (userInput === city) {
    alert("Welcome to city of Karachi");
}

var gender1 = "male";//Q2
var gender2 = "female";
var user = prompt("Enter your gender? ");
if (user === gender1) {
    alert("Good Morning Sir");
}
else if (user === gender2) {
    alert("Good Morning Maan");
}
else {
    alert("invalid");
}

var color = prompt("Insert any color of traffic signal \n Hint: Red or Yellow or Green");// Q3
if (color === "Red") {
    document.write("Must stop");
}
else if (color === "Yellow") {
    document.write("Ready to move");
}
else if (color === "Green") {
    document.write("Move now");
}
else {
    alert("Invalid");
};

var fuel = prompt("Remaining fuel in your car \n Hint: Answer in litres");//Q4
if (fuel >= 0.5 || "0.5 Litres") {
    alert("Please refill the fuel in your car");
}
else {
    alert("Good you are good to go");
}

var a = 4;
//a
if (++a === 5) {
    alert("given condition for variable a is true");//true
}
// b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");//false 
}
// c 
var c = 12;
if (c++ === 13) {
    alert("condition1 c is false");//false
}
if (c === 13) {
    alert("condition 2");//true
}
if (++c < 14) {
    alert("condition 3");//false

}
// d
if (c === 14) {
    alert("condition 4");//true
}

var materialCost = 20000;// true 
var labourCost = 20000;
var totalCost = materialCost + labourCost;
if (totalCost === materialCost + labourCost) {
    alert("The cost equals");
}
// e
if (true) {
    alert("true")//true
}
if (false) {
    alert("false")// false
}
// f

if ("car" < "cat") {
    alert("car is smaller than cat"); // true
}

var totalMarks = 300;//Q6
var obtainedMarks = +prompt("Enter your obtained marks of 3 subjrcts");
var percentage = obtainedMarks / totalMarks;

if (obtainedMarks >= 240 && obtainedMarks <= 300) {
    document.write("Total Marks  :  " + totalMarks + "<br>" + "obtained marks :  " + obtainedMarks + "<br>" + "percentage  : " + percentage * 100 + "%" + "<br>" + "Grade : A+" + "<br>" + "Remarks : Excellent" + "<br>");
}
else if (obtainedMarks >= 210 && obtainedMarks <= 239) {
    document.write("Total Marks  :  " + totalMarks + "<br>" + "obtained marks :  " + obtainedMarks + "<br>" + "percentage  : " + percentage * 100 + "%" + "<br>" + "Grade : A" + "<br>" + "Remarks : Good" + "<br>");
}
else if (obtainedMarks >= 180 && obtainedMarks <= 209) {
    document.write("Total Marks  :  " + totalMarks + "<br>" + "obtained marks :  " + obtainedMarks + "<br>" + "percentage  : " + percentage * 100 + "%" + "<br>" + "Grade  :  B" + "<br>" + "Remarks :  keep it up" + "<br>");
}
else if (obtainedMarks >= 150 && obtainedMarks <= 179) {
    document.write("Total Marks  :  " + totalMarks + "<br>" + "obtained marks :  " + obtainedMarks + "<br>" + "percentage  : " + percentage * 100 + "%" + "<br>" + "Grade  :  C" + "<br>" + "Remarks   :  Poor " + "<br>");
}
else if (obtainedMarks >= 40 && obtainedMarks <= 49) {
    document.write("Total Marks  :  " + totalMarks + "<br>" + "obtained marks :  " + obtainedMarks + "<br>" + "percentage  : " + percentage * 100 + "%" + "<br>" + "Grade  :  D" + "<br>" + "Remarks   :  Fail " + "<br>");
}
else {
    document.write("<h3 style ='color='red'>Please Put the Obtained Marks</h3>")
}


var srctNum = 4// Q 7
var userGuess = +prompt("Guess the Number between 1 to 10");
if (userGuess === srctNum) {
    alert("BinGoOo ! \n Correct answer");
}
else if (userGuess === srctNum + 1 || userGuess === srctNum - 1) {
    alert("OpSs !\n Your are too Close")
}


var checkNum3 = +prompt("Select any number");  // Q8
if (checkNum3 % 3 === 0) {
    alert("It is divisible by 3");
}
else {
    alert("It is not divisible by 3");
}



var userInput = + prompt("Enter a Number \n Even or Odd ...")// Q9
if (userInput % 2 === 0) {
    alert("even number");
}
else {
    alert("Not a odd number");
}


var temp = prompt("Enter a Temperature"); //Q10
if (temp >= 40) {
    alert("It is too hot outside");
}
else if (temp >= 30) {
    alert("Ther weather today is normal ");
}
else if (temp >= 20) {
    alert("today's Weather is cool !\n YaHoOoo");
}
else if (temp >= 10) {
    alert(" OMG today's Weather is soo  cool !\n YaHoOoo");
}
else {
    alert("freez");
}

var userNum1 = +prompt("Enter the First Number");//Q11
var sign = prompt("select the sign \n + , - * ,/, %");
var userNum2 = +prompt("Enter the Second Number");
// var result = ""
if (sign === "+") {
    alert(userNum1 + "+" + userNum2 + "=" + (userNum1 + userNum2));
}
else if (sign === "-") {
    alert(userNum1 + "-" + +userNum2 + "=" + (userNum1 - userNum2));
}
else if (sign === "*") {
    alert(userNum1 + "*" + userNum2 + "=" + (userNum1 * userNum2));
}
else if (sign === "/") {
    alert(userNum1 + "/" + userNum2 + "=" + (userNum1 / userNum2));
}
else if (sign === "%") {
    alert(userNum1 + "%" + userNum2 + "=" + (userNum1 % userNum2));
}
else {
    alert("operator")
}

/// Done ///