
// Hide/Show logo
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
// test scroll Top
// $('h1').on('click', function(){
// 	alert($(window).scrollTop() + 'px');
// });

//hove over employment comapny effect

$('.company').mouseenter(function(){
	$(this).addClass('selected');
})

$('.company').mouseleave(function(){
	$('.company').removeClass('selected');
});


	
	