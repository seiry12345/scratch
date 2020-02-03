$('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      speed: 700
    });
   $('.slider').on('setPosition', function () {
      $(this).find('.slick-slide').height('auto');
      const slickTrack = $(this).find('.slick-track');
      const slickTrackHeight = $(slickTrack).height();
      $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });
    
    
    
    // set equal height to items
    .slick-slide {
    height: 100%;
  }
