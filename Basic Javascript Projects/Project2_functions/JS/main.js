function My_First_Function () {//creating a function
    var str="This text is blue";//creating a string
    var result= str.fontcolor("blue");//changing that string to blue
    document.getElementById('Blue_Text').innerHTML = result;//locating the id in the html file
} 

function myFunction() {//creating a function
    
    var sentence="I am learning";//creating a sentence variable 
    sentence += " A lot from this course!";//concatenating this with the above string
    document.getElementById("Concatenate").innerHTML = sentence//locating the id in the html file
}

function myMath() {
    document.getElementById("demo").innerHTML = "22";
  }