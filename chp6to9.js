document.write("<h1>Result</h1>"+"<br>");//Q1
document.write("<h3>Increment</h3>"+"<br>");
var x = 20;
document.write("The value of x is "+x+"<br>");
var x = 20;
document.write("The value of ++x is :"+ ++x + "<br>"+"now value of x is 21" +"<br>");
var x = 21;
document.write("The value of x++ is :"+ x++ + "<br>");
document.write("The value of x is  :"+ x + "<br>");
document.write("<h3>Decrement</h3>"+"<br>");

var x = 22;
document.write("The value of x is "+x+"<br>");
document.write("The value of --x is :"+ --x + "<br>"+"now value of x is 21" +"<br>");
var x = 21;
document.write("The value of x-- is :"+ x-- + "<br>");
document.write("The value of x is  :"+ x + "<br>"+"<br>"+"<br>");

var a = 2;//Q2
var b = 1;

var result = --a - --b + ++b + b--;
// Expanation: 1 -  0  +   1 + 1
document.write("Result: "+ result+"<br>");
var stage1 = --a;
            // 1
document.write(stage1+"<br>");
var stage2 = --a - --b;
           //  1 - 0
document.write(stage2+"<br>");
var stage3 = --a - --b + ++b; 
        //     1 - 0 +    1
document.write(stage3+"<br>");

var name = prompt("What is your name");//Q3
alert("Assalam o alaikum \n"+ name+" \n"+"Welcome to visit my page");

// Question 04 not available in github //


var subject1 = prompt("Subject1");//Q6
var obtnMarks1 = +prompt("Obtained Marks of :" + subject1);

var subject2 = prompt("subject2");
var obtnMarks2=+ prompt("Obtained Marks of :" + subject2);

var subject3 = prompt("Subject3");
var obtnMarks3= +prompt("Obtained Marks of :" + subject3);

// Total marks for each subject
var totalMarks = 100;
 
// Calculate total obtained marks and overall percentage
var totalObtained = obtnMarks1 + obtnMarks2 + obtnMarks3;
var overallPercentage = (totalObtained / (totalMarks * 3)) * 100;

// Display the results in a table
document.write('<table>');
document.write('<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>');
document.write('<tr><td>' + subject1 + '</td><td>' + totalMarks + '</td><td>' + obtnMarks1 + '</td><td>' + ((obtnMarks1 / totalMarks) * 100).toFixed(2) + '%</td></tr>');
document.write('<tr><td>' + subject2 + '</td><td>' + totalMarks + '</td><td>' + obtnMarks2 + '</td><td>' + ((obtnMarks / totalMarks) * 100).toFixed(2) + '%</td></tr>');
document.write('<tr><td>' + subject3 + '</td><td>' + totalMarks + '</td><td>' + obtnMarks3 + '</td><td>' + ((obtnMarks / totalMarks) * 100).toFixed(2) + '%</td></tr>');
document.write('<tr><td><strong>Total</strong></td><td><strong>' + (totalMarks * 3) + '</strong></td><td><strong>' + totalObtained + '</strong></td><td><strong>' + overallPercentage.toFixed(2) + '%</strong></td></tr>');
document.write('</table>');



// /////// done //////////////