/// literal notation ///
var studentNames = ["Fatima", "Aneesa", "Hooriya", "Sana"]; //Q#1
console.log(studentNames);


/// object notation ///
var studentNames = new Array("Taha", "Zohan", "Aslam", "Ali"); // Q#2
console.log(studentNames);


var str = ["Lichee", "Mango", "Cherry"]; // Q#3
console.log(str);


var num = [1, 2, 3, 4, 5]; // Q#4
console.log(num);


var boolean = [true, false]; // Q#5
console.log(boolean);


var mixedArr = ["Hello", "Anas", 28, true, "male"]; // Q#6
console.log(mixedArr);


var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]; // Q#7
document.write("<h4>Qualifications</h4>" + "<br>");
document.write("1)" + qualifications[0] + "<br>");
document.write("2)" + qualifications[1] + "<br>");
document.write("3)" + qualifications[2] + "<br>");
document.write("4)" + qualifications[3] + "<br>");
document.write("5)" + qualifications[4] + "<br>");
document.write("6)" + qualifications[5] + "<br>");
document.write("7)" + qualifications[6] + "<br>");
document.write("8)" + qualifications[7] + "<br>");
document.write("<hr>");


var stdNames = ["Amjad", "Zohan", "Ayan"];   // Q#8
var scores = [320, 400, 250];
var totalMarks = [500];
document.write("Score of " + stdNames[0] + "is " + scores[0] + " Percentage :" + (scores[0] / totalMarks * 100) + "%" + "<br>");
document.write("Score of " + stdNames[1] + "is " + scores[1] + " Percentage :" + (scores[1] / totalMarks * 100) + "%" + "<br>");
document.write("Score of " + stdNames[2] + "is " + scores[2] + " Percentage :" + (scores[2] / totalMarks * 100) + "%" + "<br>");


document.write("<h3>Colors</h3>"); //Q#9
var colorsName = ["Red ", " Crimson ", " Purple ", " Black "];
document.write(colorsName + "<br>");

var userStart = prompt("What color you want to add to the start?"); // a
colorsName.unshift(userStart);
document.write("Start Updated :" + colorsName + "<br>");

var userEnd = prompt("What color you want to add to the end?")
colorsName.push(userEnd); // b
document.write("End updated :" + colorsName + "<br>");


// Add two colors to the beginning of the array
var colorsName = ["Red", "Crimson", "Purple", "Black"]; // c

// Prompt user for two colors to add at the beginning
var color1 = prompt("Enter the first color to add at the beginning:");
var color2 = prompt("Enter the second color to add at the beginning:");

// Add colors to the beginning of the array
colorsName.unshift(color1);
colorsName.unshift(color2);

// Display the updated array
document.write("Updated Array: " + colorsName + "<br>");

var colors = ["white", "green", "black"];// d
colors.shift();
document.write("delete Array: " + colors + "<br>");


colors.pop(); //e
document.write("delete Array: " + colors + "<br>");


// f
var colorsName = ["Red ", " Crimson ", " Purple ", " Black "];
document.write("Original array : "+colorsName + "<br>");
var userColor= prompt("which colors wants to add a color");
var indexNumber = +prompt("which index number?");

// Color ko add 
if (indexNumber >= 0 && indexNumber <= colorsName.length) {
    colorsName.splice(indexNumber, 0, userColor);
    document.write("Updated Array: " + colorsName);
  } else {
    document.write("Invalid index number");
  }

  // g 
  var colorsName = ["Red", "Crimson", "Purple", "Black", "Yellow", "Green"];

  document.write("Original Array: " + colorsName + "<br>");
  
  // User se poochta hai ki woh kahan se kitne colors delete karna chahta hai
  var indexNumber =+prompt("Enter the index number from where you want to delete colors:");
  var numColors = +prompt("How many colors do you want to delete?");
  
  // Colors ko delete karta hai
  if (indexNumber >= 0 && indexNumber < colorsName.length && numColors > 0) {
    colorsName.splice(indexNumber, numColors);
    document.write("Updated Array: " + colorsName);
  } else {
    document.write("Invalid index number or number of colors");
  }
  


  // Question 10 method of es6 //
//   Not allowed as per assignment requirement //*


var cities =["Karachi","Lahore","Quetta","Peshawar","Islamabad"]; // Q11
document.write("<h4>City List :</h4>"+cities+"<br>");

document.write("<h4>Selected cities list :</h4>"+"<br>"+"<hr>");
cities=cities.slice(2,4);
document.write(cities+"<br>");


var arr =["This","is","my","cat"]; // Q# 12
document.write("Array :"+arr+"<br>");
arr = arr.join("  ");
document.write("join Arrary :"+arr+"<br>");
document.write("<hr>");


var newArr = ["Keyboard","mouse","printer","monitor"]; //  Q# 13
document.write("Devices : "+newArr+"<br>");


document.write("OUT :"+"<br>"+newArr[0]+"<br>");
document.write("OUT :"+"<br>"+newArr[1]+"<br>");
document.write("OUT :"+"<br>"+newArr[2]+"<br>");
document.write("OUT :"+"<br>"+newArr[3]+"<br>");
document.write("<hr>");



var newArr2 = ["Keyboard","mouse","printer","monitor"]; //  Q# 14
document.write("Devices : "+newArr2+"<br>");
document.write("OUT :"+"<br>"+newArr2.pop()+"<br>");
document.write("OUT :"+"<br>"+newArr2.pop()+"<br>");
document.write("OUT :"+"<br>"+newArr2.pop()+"<br>");
document.write("OUT :"+"<br>"+newArr2.pop()+"<br>");
document.write("<hr>");


var phones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];//Q#15
document.write("<select class='phones'>");
document.write("<option>"+phones[0]+"</option>");
document.write("<option>"+phones[1]+"</option>");
document.write("<option>"+phones[2]+"</option>");
document.write("<option>"+phones[3]+"</option>");
document.write("<option>"+phones[4]+"</option>");
document.write("<option>"+phones[5]+"</option>");
document.write("</select>");

///////////////// DONE  /////////////////////////////////////////////////