var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// From class codes

var totalImages = $("img").length;
var currentImageIndex;

$(".prev").on("click", function(){
  currentImageIndex = $(".active").prev().index();
  // console.log(currentImageIndex, totalImages);

  if (currentImageIndex >= 0 && currentImageIndex < totalImages) {
    $(".active").removeClass("active").prev().addClass("active");
  }
});

$(".next").on("click", function(){
  currentImageIndex = $(".active").next().index();
  // console.log(currentImageIndex, totalImages);

  if (currentImageIndex >= 0 && currentImageIndex < totalImages) {
    $(".active").removeClass("active").next().addClass("active");
  }
});