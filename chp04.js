var a = 3,b = 4,c = 5;//Q1
document.write( "a ="+a ," b=" +b ," c=" +c +"<br>");

//5 legal variables// //Q2
document.write(`<h2>5 legal variables</h2>`);
var camelCase = "camelCase";
var PascalCase ="PascalCase";
var _password = "_password";
var user_name = " haseena";
var flatcase = "flatcase";
document.write(camelCase + "<br> " +  PascalCase +"  <br>"+ _password +"<br>  "+ user_name +" <br> "+ flatcase +"<br>");

// 5 illegal //
document.write(`<h2>5 illegal variables</h2>`);
document.write("1stname"+"<br>"+"@name"+"<br>"+"123name"+"<br>"+"user name"+"<br>"+"!username"+"<br>");

//Q3//
var num = "numbers,";
var $sign = "$";
var _sign = "_";
var example = "$my_1stVariable";
var letter = "letter,";
var example2 = "$name,_name";
var name = "name";
var Case = "case sensitive";
var key = "key words";

document.write('<h2> "Rules for naming JS variables" </h2>' );

document.write("Variable names can only contain" + " " + num + " " + $sign + "and " + " " + _sign +"." +" For example:" + " " + example );
document.write('<br>');
document.write("Variable must begin with a " + " " + letter + " " + $sign + " " +" or" + " " + _sign + " " + "For example " + " " + example2 +" " + "or " + " name" );
document.write('<br>');
document.write("Variable names are " + " " + Case);
document.write('<br>');
document.write("Variables names should not be JS" + " " + key);

// done//