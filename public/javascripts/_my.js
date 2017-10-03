// initialize Isotope after all images have loaded
var $container = $('.sort-section').imagesLoaded( function() {
	$container.isotope({
	});
});

$( document ).ready(function() {
	// activate jquery isotope */
	var $container = $('.sort-section').isotope({
		itemSelector : '.item',
		isFitWidth: true
	});

	//$(window).smartresize(function(){
	//	$container.isotope({
	//		columnWidth: '.col-sm-4'
	//	});
	//});
	$container.isotope({ filter: '*' });

	// filter items on button click
	$('.filters').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({ filter: filterValue });
	});
});
