function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);//the program is pausing for 1,000 milliseconds
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

var slideIndex = 1;//new var index set to one (to start before the first slide)
showSlides(slideIndex);//showSlides() function with new var


function plusSlides(n) {//name of function n being the parameter
  showSlides(slideIndex += n);//letting the arrows move left to right
}


function currentSlide(n) {//what the current slide is showing
  showSlides(slideIndex = n);//moves pictures with each slide so they appear correctly
}

function showSlides(n) {//new function creating the actual slideshow
  var i;//new var i
  var slides = document.getElementsByClassName("mySlides");//slides var is calling to the html class 'myslides'
  var dots = document.getElementsByClassName("dot");//assigning var dots to the dots class in html
  if (n > slides.length) {slideIndex = 1}//if the parameter is less than the length of the amount of slides, then index is = 1 
  if (n < 1) {slideIndex = slides.length}//if the parameter is greater than 1 then the index is set to the slide number (2,3,4)
  for (i = 0; i < slides.length; i++) {// a for function stating if var i = 0, then i is less than the index so increase i by 1
      slides[i].style.display = "none";//displaying nothing because it is on the first index
  }
  for (i = 0; i < dots.length; i++) {//for method stating i = 0 then i is less than length of the dots so increase i by 1
      dots[i].className = dots[i].className.replace(" active", "");//replace classname
  }
  slides[slideIndex-1].style.display = "block";//block what is not currently showing
  dots[slideIndex-1].className += " active";//display what is showing
}