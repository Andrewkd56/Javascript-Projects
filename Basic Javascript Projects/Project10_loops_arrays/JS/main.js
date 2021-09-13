function Call_Loop() {//loop function
    var Digit = "";//new var digit
    var X = 1;//var X
    while(X < 21) {//while function, while x is less than 21 perform the following
        Digit += '<br>' + X;//digit plus X
        X++;//increase X by one
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var string = "G'day mate";
document.getElementById('length').innerHTML = string.length//returns the number of characters in the above string

var Types = ["Fire", "Water", "Electric", "Grass", "Psychic", "Rock"];//types var
var Content ="";//empty var
var Y;//new var
function for_Loop() {//utilizing for loops
    for (Y = 0;Y <Types.length; Y++) {//for y=0, y is less than the amount of types, so add one to Y
        Content += Types[Y] + "<br>";//content equals Types to what nnumber the Y is
    }
    document.getElementById("List_of_types").innerHTML = Content;//lists off the types
}

function array_Function() {//utilzing arrays
    var Pokemon = [];//empty pokemon var
    Pokemon[0] = "Charizard";//adding arrays 0 - 3
    Pokemon[1] = "Blastoise";
    Pokemon[2] = "Venusaur";
    Pokemon[3] = "Raichu";
    document.getElementById("Array").innerHTML = "Do you choose, " + Pokemon[1] + " as your first pokemon?";//picking value from the array to display
}

function constant_function() {//utilizing constants
    const Musical_Instrument = {type:'guitar', brand:"fender", color:"black"};//desribing a constant; constants are not changeable like vars
    Musical_Instrument.color="blue";//changing color
    Musical_Instrument.price = "$900";//adding price
    document.getElementById("constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function var_to_constant() {//displaying differences between vars and constants
var X = 66;//function scope var, will always be 66 unless....
document.getElementById("variable").innerHTML = X;
{
    let X = 33;//using let means this is a block scope it can only be called to in these curly brackets
    document.getElementById("Constant").innerHTML = X;
}
document.getElementById("variable").innerHTML = X;}

function return_function() {
   
    return Math.PI; //The return statement stops the execution of a function and returns a value from that function.
    
}
document.getElementById("return").innerHTML = return_function();

let shoe = {
    brand: "Nike",
    model: "Free run",
    year: "2020",
    color: "Black",
    description : function() {
        return "The shoe is a " + this.year + this.color + this.brand + this.model;
    }
};
document.getElementById("Shoe_Object").innerHTML = shoe.description();

//utilizing break to stop a loop
let text = "";//let text be blank
for (let i = 0; i < 20; i++) {// a for loop, let i = 0, if i is less than 20 increase i
  if (i === 10) { break; }//if i = 10 break the loop
  text += "The number is " + i + "<br>";//change text var to the number is + i
}

document.getElementById("break").innerHTML = text;

//utilizing continue to continue a loop and skip over an iteration of the loop

let numbers = "";
for (let i = 5; i < 22; i++) {
  if (i === 12) { continue; }
  numbers += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = numbers;