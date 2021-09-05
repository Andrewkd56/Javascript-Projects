function addition_Function() {//addition function
    var addition = 2 + 2;//setting var to 2 + 2
    document.getElementById('Math').innerHTML = "2 + 2 = "+ addition;
}

function subtraction_Function() {//sub function
    var subtraction = 5 - 2;//setting var to 5 - 2
    document.getElementById('Math').innerHTML = "5 - 2 = "+ subtraction;
}

function multiplication() {//multiplication function
    var simple_Multiplication = 6 * 8;//setting var to 6 * 8
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Multiplication;
}

function division() {//division function
    var simple_Division = 48 / 6;//setting var to 48 / 6
    document.getElementById("Math").innerHTML ="48 / 6 = " + simple_Division;
}

function more_Math() {//pemdas function
    var simple_Math = (1 + 2) * 10 / 2 - 5;//finding the value of this operation
    document.getElementById("Math").innerHTML = "1 plus 2 multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math
}

function modulus_Operator() {//modulus function
    var simple_Modulus = 25 % 6;//using % to get the remainder of 25 / 6
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of = " + simple_Modulus;
}

function negation_Operator() {//creating a negation function
    var x = 10;
    document.getElementById("Math").innerHTML = -x;//the negative of var x
}

var A = 5;//assigning var A
A++;//increment from 5 aka increase by 1
document.write(A);//write var A on the page

document.write("<br>");

var B = 4.25;
B--;//decrement from 4.25 aka drop dowm by 1
document.write(B);

window.alert(Math.random());//choosing random number from 0 - 1

window.alert(Math.random()  * 100); //choosing a random number from 0 - 100

//Math Object is 'math.property for ex.
Math.E //returns Euler's number

Math.PI //returns PI

Math.SQRT2 //square root of 2
document.write("<br>");
document.write(Math.PI);