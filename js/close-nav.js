// open nav
$('.hamburger').on('click', function(){
	$('nav').css({'top':'0'});
	$('body').addClass('no-scroll');
	$('.hamburger').css({'display':'none'});
});

// close nav
$('.close-nav').on('click', function(){
	$('nav').css({'top':'-100%'});
	$('body').removeClass('no-scroll');
	$('.hamburger').css({'display':'block'});
});

$('.close-nav').on('click', function(){
	$('nav').css({'top':'-100%'});
});


// hide show web logo
$(window).on('scroll', function(){
	if ($(window).scrollTop()>37) {
		$('.logo').slideUp(200);
		
	}
});

$(window).on('scroll', function(){
	if ($(window).scrollTop()<36) {
		$('.logo').slideDown(300);	
	}
});
// Select option effect

$('.page, .pagespecial, .nest').mouseenter(function(){
	$(this).addClass('choose');
});

$('.page, .pagespecial, .nest').mouseleave(function(){
	$(this).removeClass('choose');
});

// show hide works effect

$('.special').on('click', function(){
	$('.special').slideUp(700);
	$('.listwrapper').slideDown(700);
});

$('.triangle').on('click', function(){
	$('.listwrapper').slideUp(700);
	$('.special').slideDown(700);
});

//hover social media icons
$("img.socialmedia").hover(function(){
    $(this).addClass('hover');
    }, function(){
    $(this).removeClass('hover');
});


