// Trigger to open/close Modal

$('.videoswrapper').on('click', function(){
	$('.videomodal').css({'display':'block'});
	$('section').css({'display':'none'});
	$('.hamburger').css({'display':'none'});
	
	var getPath = $(this).find('.videothumb').attr('src');
	console.log('this is the path' + getPath);
	$('.frame').attr({'src': getPath});

	var getimagebackgound = $(this).find('.imgbackground').attr('src');
	console.log("'"+getimagebackgound +"'");
	$('.blur').css({'background-image': "url('"+getimagebackgound +"')"});

	// change video path
	// 	var a = $(this:nth-child(2)).attr('class');
	// $('.smt').html('hey ' + a);
	// $('.frame').attr('class', "a");
});

$('.close-button').on('click', function(){
	$('.videomodal').css({'display':'none'});
	$('section').css({'display':'flex'});
	$('.hamburger').css({'display':'inline-block'});
	$('.frame').attr({'src': ''});
})


$('.logo').on('click', function(){
	$('.videomodal').css({'display':'none'});
	$('section').css({'display':'flex'});
	$('.hamburger').css({'display':'inline-block'});
	$('.frame').attr({'src': ''});
})
//Change path of videos and background;




// $('.videoswrapper').on('click',function(){

// })