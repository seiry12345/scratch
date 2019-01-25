if ($(window).width() > 992) {
    scrollOffset = 183;
  } else if ($(window).width() > 768) {
    scrollOffset = 139;
  } else {
    scrollOffset = 84;
  }

  $('.scroll-nav .mobile-click-close').bind('click', function (event) {
    event.preventDefault();

    if ($(window).width() <= 992) {
      $('.mobile-button').trigger('click');
    }

    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - scrollOffset)
    }, 1000, 'swing');
  });
