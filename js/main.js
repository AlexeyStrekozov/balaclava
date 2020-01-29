$('.slide-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slide-bottom',
  responsive: [{
       breakpoint: 769,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true
       }
     }
   ]
  
});
$('.slide-bottom').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slide-top',
  dots: false,
  arrows: true,
  focusOnSelect: true,
  responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 994,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

$('.price-slide-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.price-slide-bottom'

});
$('.price-slide-bottom').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.price-slide-top',
  dots: false,
  arrows: true,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

$('.price-slide-top__1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.price-slide-bottom__1'

});
$('.price-slide-bottom__1').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.price-slide-top__1',
  dots: false,
  arrows: true,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

$('.price-slide-top__2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.price-slide-bottom__2'

});
$('.price-slide-bottom__2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.price-slide-top__2',
  dots: false,
  arrows: true,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

$('.price-slide-top__3').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.price-slide-bottom__3'
  

});
$('.price-slide-bottom__3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.price-slide-top__3',
  dots: false,
  arrows: true,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

$('.price-slide-top__4').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.price-slide-bottom__4'

});
$('.price-slide-bottom__4').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.price-slide-top__4',
  dots: false,
  arrows: true,
  focusOnSelect: true,
  responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

