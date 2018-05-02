// $("img.image").hover(function(){
//     $(this).addClass('selectimage');
//    	}, function(){
//     $(this).removeClass('selectimage');
// });


// MODAL function to create slideshow

var totalImages = $(".modalimage").length;
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

// Open Modal
$('.viewport').on('click', function(){
  var selectedImageIndex = $(this).index();
  $('.modalimage').removeClass("active");
  $(".modalimage").eq(selectedImageIndex).addClass("active");

  $('.modal').fadeIn();
  $('.hamburger').hide();
});

// Close Modal
$('.close-button').on('click', function(){
	$('.modal').fadeOut();
	$('.hamburger').fadeIn(1000);
});



