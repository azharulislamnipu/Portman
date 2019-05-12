(function($) {
    "use strict";
    
    /*--
    blog slider
    -----------------------------------*/
    $(".blog-slider").slick({
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,

                    slidesToShow: 1
                }
            }
        ]

    });
   
    
    
    
})(jQuery);