document.write(typeof "Word");//datatype string

document.write(typeof 3);//datatype number

//type coercion, operands of an operator are dif data types

document.write("10" + 5);//here we have a string and a number data type, this will write 105

function is_Number() {//naming function
    document.getElementById("example").innerHTML = 0/0;//0 can't be divided by 0 so it will reutrn NaN
    
}

function not_Number() {
    document.getElementById('test').innerHTML = isNaN('This is a string');//this will display tru because this is not a number
   
}

function not_Numbers() {
    
    document.getElementById('tests').innerHTML = isNaN('007');//this will display false as 00 is a number
}

document.write('<br>');

document.write(2E310);

document.write('<br>');

document.write(-3E310);

function display_Infinity() {
    document.getElementById("infinite").innerHTML = 5E610;
    document.getElementById("neginfinite").innerHTML = -6E562;
}

document.write('<br>');

document.write(10 > 2);//a true boolean

document.write('<br>');

document.write(10 < 2);//a false boolean

document.write('<br>');

console.log(2 + 2);//using console to display math

console.log(55 > 65);//showing a boolean in the console

document.write(10 == 10); //is 10 equal to 10, == is used to compare

document.write('<br>');

document.write(3 == 11);//is 3 equal to 11

document.write('<br>');

X = 10;
Y = 10;
document.write(X === Y);//is x the same as y, === is used to compare value AND data types

A = 50;
B = "50";
document.write('<br>');
document.write(A === B);//A is not equal to b because A is a number and B is a str

document.write('<br>');

C ="Math";
D = 6;
document.write(C === D);//C is a str and D is a number so false

E = 46;
F = 40;
document.write('<br>');
document.write(E === F);//False because the values are not the same

document.write('<br>');

document.write(5 > 2 && 10 > 4);//using logical operators to check if both are true
document.write('<br>');
document.write(5 > 10 && 10 > 4);//false because both are not correct

document.write('<br>');
document.write(5 > 10 || 10 > 4);//using ||(or) just one needs to be true for it to be true
document.write('<br>');
document.write(5 > 10 || 10 > 20);//false both sides are wrong

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);//! is a not operator, checks if something is ture or not
    document.getElementById("Yot").innerHTML = !(5 > 10); //true
}