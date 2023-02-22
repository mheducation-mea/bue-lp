(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

       $('.case-study-slider').owlCarousel({
           loop: true,
           items: 3,
           dotsEach: true,
           autoplay: true,
           margin: 30,
           nav: false,
           mouseDrag: true,
           smartSpeed: 500,
           dots: true,
           responsiveClass: true,
           responsive: {
               // breakpoint from 0 up
               320: {
                   items: 1
               },
               // breakpoint from 480 up
               480: {
                   items: 1
               },
               // breakpoint from 768 up
               768: {
                   items: 2
               },
               // breakpoint from 768 up
               992: {
                   items: 3
               }
           }
       })



    });

}(jQuery));