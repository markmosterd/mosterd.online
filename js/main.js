
// Wait for DOM (Document Object Model) to load, that's just your website (excluding external files like images)
$(document).ready(function(){

    // Click the hamburger icon
    $('.toggle-mobile-menu').click(function(){

      // Show the mobile menu
      $('#mobile-menu').toggleClass('mobile-menu-visible');

    });

    // Check if .element is on page
    if ( 0 !== $('.element').length ) {

      // Typed.js
      var typed = new Typed('.element', {
        strings: ["MOSTERD.online^7000"],
        typeSpeed: 100,
        loop: true,
        backSpeed: 40,
        showCursor: true
      });

    }

});

// Wait for window to load, including all images
$(window).on('load', function () {

  // Check if image is on page
  if ( 0 !== $('#scene').length ) {

    // Parallax.js
    var scene = document.getElementById('scene'),
        parallax = new Parallax(scene);

  }

  $('.flexslider').flexslider({

    // Customize flexslider properties
    animation: "slide",
    slideshowSpeed: 5000,
    animationSpeed: 1000,
    slideshow: false,
    directionNav: false,
    start: function() {

      $('#testimonials-arrow-left').on('click', function(event){

        event.preventDefault();

        $('.flexslider').flexslider('prev');

      });

      $('#testimonials-arrow-right').on('click', function(event){

        event.preventDefault();

        $('.flexslider').flexslider('next');

      });

    }

  });


});
