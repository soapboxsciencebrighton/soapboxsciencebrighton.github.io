
let slideIndex2 = 0;
showAutoSlides2();

//var nextslideTimeout = setTimeout(showAutoSlides, 5000); // Change image every 5 seconds


function showAutoSlides2() {
  let i2;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  for (i2 = 0; i2 < slides2.length; i2++) {
    slides2[i2].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  for (i2 = 0; i2 < dots2.length; i2++) {
    dots2[i2].className = dots2[i2].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
   
  setTimeout(showAutoSlides2, 4000); // Change image every 4 seconds
  
}

// let slideIndex2 = 1;
showManSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  var timerid2 = window.setTimeout(function() {}, 0);

  while (timerid2--) {
    window.clearTimeout(timerid2); // will do nothing if no timeout with id is present
  }
  
  showAutoSlides2 = 0;
  showManSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showManSlides2(slideIndex2 = n);
}

function showManSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
} 
