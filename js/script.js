$(document).ready(function () {
  $('.our-team-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

  $('.home-slider').slick({
    dots: true,
    arrows: false,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.our-service-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


  // TAB SLIDER
  // ===========

  let totalTabsCount = 0;
  let activeTabIndex = 1;
  let tabChangeTimeout = 6000;

  totalTabsCount = $("#happiness-nav-tab .nav-link").length;

  function tabChangeHandler() {
    if (activeTabIndex == totalTabsCount) {
      activeTabIndex = 1;
    } else {
      activeTabIndex++;
    }
    $("#happiness-nav-tab .nav-link")
      .eq(parseInt(activeTabIndex - 1))
      .trigger("click");
  }

  let AUTO_CHANGE_TIMER = setInterval(tabChangeHandler, tabChangeTimeout);

  // IF PAUSE AUTO CHANGE ON HOVER THEN FOLLOW BELOW CODE
  // $("#happiness-nav-tab .nav-link").hover(
  //   function () {
  //     clearInterval(AUTO_CHANGE_TIMER);
  //   },
  //   function () {
  //     AUTO_CHANGE_TIMER = setInterval(tabChangeHandler, tabChangeTimeout);
  //   }
  // );




})


$('.new-team-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});