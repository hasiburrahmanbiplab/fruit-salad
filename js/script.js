$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.about-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:'<button type="button" class="slick-prev prev-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
    nextArrow:'<button type="button" class="slick-next next-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
    responsive: [
        {
            breakpoint:992,
            settings: {
                dots:true,
                arrows:false,
            }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots:true,
            arrows:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            arrows:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });