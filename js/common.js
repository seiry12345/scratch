var sandItems = 3;
var scrollOffset;

$(function () {

  function setMax(step) {
    let liNumb = $('.sand-caps-item');
    for (let i = 0; i < liNumb.length; i = i + step) {
      var arr = liNumb.slice(i, i + step);
      var max = 0;
      $(arr).each(function () {
        if ($(this).find('.sand-caps-title').height() > max) {
          max = $(this).find('h3').height();
        }
      });
      $(arr).find('h3').height(max);
    }
  }


  if ($(window).width() > 1280) {
    sandItems = 4;
  } else if ($(window).width() > 600) {
    sandItems = 3;
  } else if ($(window).width() > 480) {
    sandItems = 2;
  } else {
    sandItems = 1;
  }

  setMax(sandItems);

  $('.sand-controls').click(function () {
    $(this).siblings('button').removeClass('sand-controls--active');
    $(this).addClass('sand-controls--active');
    var imgClass = $(this).data('img');
    $(this).parents('.sand-caps-item').find('img').removeClass('sand-color-active');
    $(this).parents('.sand-caps-item').find('.' + imgClass).addClass('sand-color-active');
  });

  $('.region-block').click(function () {
    $(".modal-regions, .modal-overlay").fadeIn('500');
  });

  $('.modal-regions li span').click(function () {
    var region = $(this).text();
    $(".modal-overlay").fadeIn('500');
    setCookie('region', region);
    document.location.reload();
  });

  //modal video
  $(".install-play").on("click", function (e) {
    e.preventDefault();
    $(".modal-video, .modal-overlay").fadeIn('500');
  });

  $(".video-close").on("click", function () {
    $(".modal-video, .modal-overlay, .modal-block").fadeOut('400');
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      $(".modal-call, .modal-video, .modal-overlay, .modal-privacy, .modal-block").fadeOut(400);
    }
  });
  //modal call
  $(".modal-popup").on("click", function (e) {
    e.preventDefault();
    $(".modal-call, .modal-overlay").fadeIn(500);

    var form = $('.call-form');
    if ($(this).hasClass('sand-caps-button')) {
      form.find('.color-block, .count-block').show();
      form.find('textarea').hide();
    } else {
      form.find('.color-block, .count-block').hide();
      form.find('textarea').show();
    }
  });

  $(".modal-call-close").on("click", function () {
    $(".modal-call, .modal-overlay").fadeOut(400);
  });


  //modal-privacy
  $(".copyright-privacy").on("click", function (e) {
    e.preventDefault();
    $(".modal-privacy, .modal-overlay").fadeIn(500);
  });

  $(".modal-privacy-close").on("click", function () {
    $(".modal-privacy, .modal-overlay").fadeOut();
  });

  $('.modal-overlay').click(function () {
    $('.modal-form, .modal-privacy, .modal-overlay, .modal-block').fadeOut(400);
  })

  // mobile menu
  $('.mobile-button').on('click', function (e) {
    $(this).toggleClass('mobile-button-close');
    $('.mobile-menu').slideToggle('swing');
  });

  // scroll

  if ($(window).width() > 992) {
    scrollOffset = 158;
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

  if ($(window).width() <= 480) {
    $('.scrollToTop').html('Наверх');
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn(600);
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  $('.scrollToTop').click(function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });

//    $('.scroll-nav a').click(function () {
//        $('.mobile-button').toggleClass('mobile-button-close');
//        $('.mobile-menu').slideToggle('swing');
//    });


  $('.caps-gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled: true
    }
  });

  $('select').customSelect({
    includeValue: true
  });

  $('.call-form .call-button-submit').click(function (e) {

    e.preventDefault();

    var _this = $(this);
    var form = $(this).parents('form');

    var product = $(this).data('product') || 'не определен';
    var color = $(this).data('color') || 'не определен';
    $(form).find('input[name="product"]').val(product);
    $(form).find('input[name="color"]').val(color);
    var msg = $(form).serialize();

    $('.button.call-button-submit').val('Отправляю...');

    $(_this).attr('disabled', 'disabled');

    $.ajax({
      type: 'POST',
      url: 'ajax/ajax.php',
      data: msg,
      success: function (response) {
        if (response == "OK") {
          swal({title: "Заявка отправлена!", text: "Мы свяжемся с вами в самое ближайшее время.", type: "success", confirmButtonColor: "8ABA0A", confirmButtonText: "Закрыть"});
        } else {
          swal({title: "Ошибка!", text: "При отправке сообщения произошла ошибка. Попробуйте связаться с нами по телефону.", type: "error", confirmButtonColor: "8ABA0A", confirmButtonText: "ОК"});
        }
      },
      error: function (xhr, str) {
        swal({title: "Ошибка!", text: "При отправке сообщения произошла ошибка. Попробуйте связаться с нами по телефону.", type: "error", confirmButtonColor: "8ABA0A", confirmButtonText: "ОК"});
      },
      complete: function () {
        $(_this).removeAttr('disabled');
        $('.button.call-button-submit').val('Отправить');
        $('.close').trigger('click');
      }
    });
  });

  function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie;
  }
});