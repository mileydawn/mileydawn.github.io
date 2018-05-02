var $grid = $('div.container').masonry({
	columnWidth: 'img.image',
	itemSelector: 'div.viewport',
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});