function genre_Function() {
    var Genre_Output;
    var Genres = document.getElementById("Genre_Input").value
    var Genre_String = " is a great genre!";
    switch(Genres) {
        case "Horror":
            Genre_Output = "Horror" + Genre_String;
            break;
        case "Comedey":
            Genre_Output = "Comedey" + Genre_String;
            break;
        case "Action":
            Genre_Output = "Action" + Genre_String;
            break;
        case "Mystery":
            Genre_Output = "Mystery" + Genre_String;
            break;
        case "Thriller":
            Genre_Output = "Thriller" + Genre_String;
            break;
            default:
                Genre_Output = "Please enter a genre exactly as writtne on the above list";
    }
    document.getElementById("Output").innerHTML = Genre_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}

var c = document.getElementById("myID");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500,250);
ctx.stroke();

var c = document.getElementById("myID");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(1 , 1, 170, 10);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 250, 250);