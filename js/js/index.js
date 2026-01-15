
$('.badoda').slick({
    autoplay: true,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    infinite: true,
    dots:true,
    responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1 ,
            },
          },
          {
            breakpoint: 768,
            settings: 'unslick',
          },
    ],
});