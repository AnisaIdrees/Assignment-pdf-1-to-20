// var multidimensional =[[],[],[]]; // Q1


var arrays = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]; //  Q#2
for(var i = 0 ; i < arrays.length; i++){
    for(var j = 0 ;  j < arrays[i].length; j++){
        document.write(arrays[i][j]+" ");
}

document.write("<br>");
}


document.write("<h3>Question 03</h3>"); // Q# 03
for(var i = 1; i<=10;i++){
document.write(i+"<br>");
}



var tableNo = +prompt("Enter the table number"); // Q# 04
var tableLength  =+prompt("Enter the length");
document.write("<div class='box'>");
document.write("<h5> table of "+tableNo+" "+"length"+tableLength+"</h5>") 
for(var i = 1; i<=tableLength;i++){
document.write(tableNo+" × "+ i + " = "+(tableNo*i)+"<br>")
}
document.write("</div>");



var fruitsName = ["Apple","Mango","Banana","Orange","Strawberry"]; // Q# 05
for(var i = 0 ; i < fruitsName.length;i++){
document.write(fruitsName[i]+"<br>");
}
document.write("Element at index 0 is Apple"+"<br>");
document.write("Element at index 1 is Mango"+"<br>");
document.write("Element at index 2 is Banana"+"<br>");
document.write("Element at index 3 is Orange"+"<br>");
document.write("Element at index 4 is Strawberry"+"<br>");


document.write("<h3>counting 1 to 15 </h3>");
for(var i = 1 ; i <= 15; i++){ /// Q# 06 // a
document.write(i+" ,");
}

document.write("<h3> Reverse counting </h3>"); // b
for(var i = 10 ; i>=1; i--){
    document.write(i+" , ");
}


// c 
document.write("<h3> Even </h3>");
for(var i = 0; i <= 20 ; i += 2){
    document.write(i+" , ");
}

document.write("<h3> Odd</h3>"); // d
for(var i = 1; i <= 20; i+=2){
    document.write(i+", ");

}

document.write("<h3> Series </h3>"); // e
for(var i = 2; i <= 20 ; i += 2){
    document.write(i+"k"+" , "+"<br>");
}


// Array A
var A = ["apple pie", "cake", "cookie", "muffin", "brownie"]; // Q# 7

// User input lene ke liye
var userInput = prompt("Welcome to ABC bakery. What do you want order SIR/MAdam");

// Search 
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput.toLowerCase()) {
    alert(userInput + " is available at index " + i + " in our bakery.");
    break;
  }
}

// Item not found hone par
if (i === A.length) {
  alert(userInput + " is not available in our bakery.");
}



var items = [24,53,78,91,12];        /// Q# 08 
document.write("Array Items : "+items+"<br>");
for(var i = 0 ; i < items.length;i++){
if(items[i]>78){
document.write("The largest number is "+items[i]+"<br>")
}
}

var items2 = [24,53,78,91,12]; // Q# 09
document.write("Array Items : "+items2+"<br>");
for(var i = 0 ; i < items2.length;i++){
if(items2[i]<24){
document.write("The Smallest number is "+items2[i]+"<br>"+"<hr>")
}
}

// Question 10
for(var i = 1 ; i <=100; i++){
document.write(i+i*5 +" , ")
}
document.write("<hr>");


// ///////////////////// done ////////////////