$( document ).ready(function() {
  // initialize Isotope after all images have loaded
  var $container = $('.sort-section').imagesLoaded( function() {
    $container.isotope({
    });
  });

  // init Isotope
  var $container = $('.sort-section').isotope({
      // options
      itemSelector: '.item',
      isFitWidth: true
  });
  $container.isotope({ filter: '*' });

  // filter items on button click
  $('.tag-container').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
  });
});
