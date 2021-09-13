function getRespNavParams() {
  if($(document).scrollTop() > 10) {
    $("#headerTop").addClass("scroll");
  } else {
    $("#headerTop").removeClass("scroll");
  }
}

function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

// function getActiveLink() {
//   topNavCoord = $(".scroll_nav").offset().top;
//   bottomNavCoord = $(".scroll_nav").offset().top + $(".scroll_nav").height();
//   $(".coord_sect").each(function() {
//     coordTop = $(this).offset().top;
//     coordBottom = $(this).offset().top + $(this).height();
//     if( topNavCoord >= coordTop && bottomNavCoord <= coordBottom ) {
//       idAttr = "#" + $(this).attr("id");
//       $(".scroll_nav a").removeClass("active");
//       $(".scroll_nav a").each(function() {
//         href = $(this).attr("href");
//         if(idAttr == href) {
//           $(this).addClass("active");
//         }
//       });
//     }
//   }); 
// }

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {
  getAnimation();
  // getActiveLink();
});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getRespNavParams();
  getAnimation();
  // getActiveLink();
});

$(document).scroll(function() {
  getRespNavParams();
  getAnimation();
  // getActiveLink();
});

$(document).ready(function() {

    getRespNavParams();

    if( $(".promo_slider").length > 0 ) {
      $(".promo_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow.png"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow.png"></button>',
          fade: true
      });
    }

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

    if( $(".tabs_slider_2").length > 0 ) {
      $(".tabs_slider_2").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow.png"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow.png"></button>',
          // fade: true
      });
    }

    $("[data-dropdown-btn]").on("click", function(e) {
      e.preventDefault();
      dr = $(this).attr("data-dropdown-btn");
      $("[data-dropdown = '"+dr+"']").slideDown(300);
      $(this).remove();
    });

    // ------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });

    $(".close_nav").click(function(e) {
      e.preventDefault();
      $("#resp_nav").fadeOut(300);
      $(".respmenubtn").removeClass("active");
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // -----------

    $('.main_nav a[href^="#"], .side_nav a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var hrefAttr = $(this).attr("href");
      if( hrefAttr.length > 0 && hrefAttr != "#" ) {
          $('html, body').stop().animate({
              'scrollTop': $(hrefAttr).offset().top+2
          }, 500);
          $('.main_nav a').removeClass("active");
          $('.side_nav a').removeClass("active");
          $(this).addClass("active");
      }
      if($("#resp_nav").is(":visible") && bodyWidth <= 767) {
        $("#resp_nav").fadeOut(300);
        $(".respmenubtn").removeClass("active");
      }
    });

    // --------------

    $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      $("body").addClass("fixed");
      $("body").css({
          "position" : "fixed",
          "top" :  -$(document).scrollTop() + "px",
          "overflow" : "hidden",
          "right" : 0,
          "left" : 0,
          "bottom" : 0,
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(document).on("click", ".close_popup, .popup_bg", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").attr("style", "");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").removeClass("fixed");
      $(".popup_bg").fadeOut(300);
      $("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
      }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

});