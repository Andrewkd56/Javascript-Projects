function Sentence() {//new function utilizing concatenate
    var part_1 = "My name ";//different vars making up a full sentence
    var part_2 = "is Andrew, ";
    var part_3 = "and I like ";
    var part_4 = "playing games.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);//using concat() to connect the dif vars
    document.getElementById("Concatenate").innerHTML = whole_sentence;//calling to html
}

function slice_Method() {//new function with slice()
    var Sentence = "You should've aimed for the head.";//var of a string
    var Section = Sentence.slice(4,13);//using var.slice() lets us slice out the words between these values
    document.getElementById("Slice").innerHTML = Section;
}

function my_Function() {//utilizing toUpperCase()
    var str = "hi there";//lowercase var str
    var upper = str.toUpperCase()//var.toUpperCase() will change it all to uppercase
    document.getElementById('sample').innerHTML = upper; //calling to it in html
}

function my_Search() {//utilizing search()
    var str = "Sally sells seashells by the seashore";//new str var
    document.getElementById('test').innerHTML = str.search("sells");//calling to html and displaying var.search() as the value where sells is at
}

function string_Method() {//utilizing toString()
    var X =182;//new number var
    document.getElementById("Numbers_to_string").innerHTML = X.toString();//changing the number to a string
}

function precision_Method() {//new function with toPrecision()
    var X = 1298.30125469745323//a very large number
    document.getElementById("Precision").innerHTML = X.toPrecision(10);//formats the above number to just 10 digits
}

function fixed_Function() {
    var num = 6.3545;//new var
    var n = num.toFixed(2);//new var saying to take the og var and reduce to the place value of 2
    document.getElementById("fixed").innerHTML = n;
}

function value_Function() {
    var phrase = "Howdy doo da";
    document.getElementById("phrase").innerHTML = phrase.valueOf();
}