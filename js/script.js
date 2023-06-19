var PROGRAM = (function () {
  var win = $(window);
  var html = $("html,body");
  var header = $("header");
  var header_logo = $(".logo-header");
  $(".header-nav").css("height", header_logo);
  var posHeader = header.height();
  $(".banner").css("margin-top", posHeader);
  var _initFixedTop = function () {
    win.scroll(function (event) {
      if (win.scrollTop() > posHeader) {
        header.addClass("fixed z-10 bg-white left-0 right-0");
      } else {
        header.removeClass("fixed z-10 bg-white left-0 right-0");
      }
    });
  };
  var menuMobile = function () {
    $("#hamburger").on("click", function () {
      $("#header_menu").addClass("header_menu_mobile_show");
      $("#close-menu").toggleClass("hidden");
    });
    $("#close-menu").on("click", function () {
      $("#header_menu").removeClass("header_menu_mobile_show");
      $("#close-menu").toggleClass("hidden");
    });
  };
  var slidePrdMains = function () {
    if ($(".prd__mains").length === 0) return;
    var swiperProdra = new Swiper(".prd__mains", {
      slidesPerView: "auto",
      slidesPerColumn: 2,
      loopedSlides: 1,
      grid: {
        rows: 2,
      },
      navigation: {
        nextEl: ".next-document",
        prevEl: ".prev-drawings",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 2.5,
        },
        1536: {
          slidesPerView: 3,
        },
      },
    });
  };
  var tabContentOne = function () {
    $(document).ready(function () {
      $(".nav_drawings a").click(function (e) {
        e.preventDefault();
        const tabId = $(this).data("tab");
        activateTab(tabId);
      });
      function activateTab(tabId) {
        $(".nav_drawings a").removeClass("tab-active");
        $(".tab-osd-content").removeClass("tab-active");
        $(`[data-tab="${tabId}"`).addClass("tab-active");
        $(`#${tabId}`).addClass("tab-active");
      }
      function changeActiveLink(tabId) {
        $(".nav_drawings a").each(function () {
          if ($(this).data("tab") === tabId) {
            $(this).addClass("tab-active");
          } else {
            $(this).removeClass("tab-active");
          }
        });
      }
    });
  };
  var tabContentTwo = function () {
    $(document).ready(function () {
      $(".nav_document a").click(function (e) {
        e.preventDefault();
        const tabId = $(this).data("tab");
        activateTab(tabId);
      });
      function activateTab(tabId) {
        $(".nav_document a").removeClass("tab-active");
        $(".tab-document-content").removeClass("tab-active");
        $(`[data-tab="${tabId}"`).addClass("tab-active");
        $(`#${tabId}`).addClass("tab-active");
      }
      function changeActiveLink(tabId) {
        $(".nav_document a").each(function () {
          if ($(this).data("tab") === tabId) {
            $(this).addClass("tab-active");
          } else {
            $(this).removeClass("tab-active");
          }
        });
      }
    });
  };
  return {
    _: function () {
      slidePrdMains();
      menuMobile();
      _initFixedTop();
      tabContentOne();
      tabContentTwo();
    },
  };
})();
$(document).ready(function () {
  if (/Lighthouse/.test(navigator.userAgent)) {
    return;
  }
  PROGRAM._();
});
