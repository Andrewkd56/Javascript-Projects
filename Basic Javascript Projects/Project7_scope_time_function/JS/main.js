var A = 10;//setting a global variable
var B = 11;
function Add_numbers() {//creating a new function

    var X = 5;//setting a local variable
    console.log(15 + X);
}

function Subtract_numbers() {
    console.log(A - 10);//using a global variable inside function
}

Add_numbers();//displaying the result of function
Subtract_numbers();

function set_Alarm() {//new function
    if (new Date().getHours() > 7) {//if time is after 7 am
        document.getElementById("Wake").innerHTML = "Time to wake up!";
    }//tell user to wake up
}
    function new_Function() { 
        if (B > A) {//new if statment if B is greater than A
            document.getElementById('Greater').innerHTML = "B is greater than A";
            
        }
    }

function Day_Function() {
    Day = document.getElementById("Day").value;
    if (Day == "Wednesday") {
        document.write("it is wednesday my dudes")
    }
    else {
        document.write("it is not wednesday my dudes")
    }
    document.getElementById("What_day_of_the_week_is_it?")
}

function Time_Function() {//creating new function
    var Time = new Date().getHours();//local var Time is what time it is on the users computer
    var Reply;//local var
    if (Time < 12 == Time > 0) {//if time is before noon and after midnight
        Reply = "It is morning time!";//set the var reply to this
    }
    else if (Time >= 12 == Time < 18) {//if time is equal to noon and less than 6p
        Reply = "It is afternoon";//set var reply to this
    }
    else {//else it is neither of these conditions
        Reply = "It is evening time";//set reply to this
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//connecting this ti our html doc
}