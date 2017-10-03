// initialize Isotope after all images have loaded
$( document ).ready(function() {
  var $container = $('.sort-section').imagesLoaded( function() {
    console.log("load images");
    $container.isotope({
      itemSelector: '.item',
    });
    console.log("init isotope 1");
  });

  var $container = $('#image-container');
  var loadedImageCount, imageCount;

  // init Isotope
  var $container = $('.sort-section').isotope({
    // options
    itemSelector: '.item',
    isFitWidth: true,
  });
  console.log("init isotope 2");

  // $container.isotope({ filter: '*' });

  // filter items on button click
  $('.tag-container').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
      console.log("click on filter");
  });
});
