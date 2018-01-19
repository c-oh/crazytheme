jQuery(".icon-container").click(function () {
    jQuery(".hamburger").toggleClass("expanded");
    jQuery("body").toggleClass("menu-push");
    jQuery("#menu").toggleClass("menu-open");
    jQuery(".menu-text").toggleClass("expanded-text");
  });