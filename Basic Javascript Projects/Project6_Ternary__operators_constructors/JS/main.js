//Ternary means “made up of three parts.” 
//A ternary operator operates on three values. 
//It can be used to assign a value to a variable 
//based on a condition. 
//This is also referred to as a conditional operator
// in that it assigns a value to a variable based on
// a condition.
//syntax is: Name_of_varaible = (condtion) ? Value_1:Value_2
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function Vehicle(Make, Model, Year, Color) {//creating function with an object vehicle and properties
    this.Vehicle_Make = Make;//using 'this' indicates vehicle is the owner of this code
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");// here we created a var 'Jack" and used the keyword 'New' to create a new vehicle object for jack
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Andrew = new Vehicle("Honda", "Civic", 2015, "Black");

function myFunction() {//new function
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;//here we are connecting our id to our html and using our above function to write out what type of car Erik has
}

function newFunction() {//new function
    document.getElementById("New_and_This").innerHTML =
    "Andrew drives a " + Andrew.Vehicle_Color + "-colored " + Andrew.Vehicle_Model +
    " manufactured in " + Andrew.Vehicle_Year;//here we are connecting our id to our html and using our above function to write out what type of car Erik has
}

function count_Function() {//creating a count function
    document.getElementById("Counting").innerHTML = Count();//finding the id in html
    function Count() {
        var Starting_point = 9;//var to start with
        function Plus_one() {Starting_point += 1;}//nested function
        Plus_one();//calling plus one function
        return Starting_point;//returning the new var
    }
}

function subtract_Function() {
    document.getElementById("Nested_Function").innerHTML = Subtraction();
    function Subtraction() {
        var First_Number = 12;
        function Minus_two() {First_Number -= 2;}
        Minus_two();
        return First_Number;
    }
    
}