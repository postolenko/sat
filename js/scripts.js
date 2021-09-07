var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".slider_1").length > 0 ) {
      $(".slider_1").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow.png"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow.png"></button>',
          fade: true
      });
    }

    if( $(".tabs_slider").length > 0 ) {
      $(".tabs_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow.png"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow.png"></button>',
          fade: true
      });
    }

    $("[data-dropdown-btn]").on("click", function(e) {
      e.preventDefault();
      dr = $(this).attr("data-dropdown-btn");
      $("[data-dropdown = '"+dr+"']").slideDown(300);
      $(this).remove();
    });

});