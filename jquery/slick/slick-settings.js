if ($('.project-slider').length) {
        //count !!!!before slick init
        $(".main-slider").on('init', function(e, slick) {
            $(".main-slider-all").text(slick.slideCount);
        });

        $(".main-slider").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $(".main-slider-count-current").text(nextSlide += 1);

        });

        $('.project-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            dots: true,
            infinite: true,
            speed: 600
        });
    }
    
    
    
    
.slick-dots {
  position: absolute;
  left: 50%;
  bottom: 125px;
  width: auto;
  display: flex;
  align-items: center;
  .transform(translateX(-50%));
  li { 
    display: flex;
    width: 10px;
    height: 10px;
    padding: 0;
    margin-right: 10px;
    background-color: #fff;
    border: 1px solid;
    border-radius: 50%;
    .transition(0.3s);
    &:nth-child(5n) {
      margin-right: 0;
    }
    &.slick-active {
      width: 17px;
      height: 17px;
      box-shadow: 0 0 9px 1px rgba(255, 84, 0, 0.56);
      background-color: @active;
    }
  }

  button {
    align-self: center;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: transparent;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: none;
    opacity: 0;
  }
}

.slick-prev,
.slick-next {
    z-index: 2;
    position: absolute;
    top: 50%;
    margin-top: -18px;
    width: 35px;
    height: 55px;
    background: url("@{active-path}css/images/slick-prev.png") no-repeat center;
    background: url('/sites/all/themes/oc_atoll/images/prev.png') no-repeat center;
    outline: none;
    border: none;
    cursor: pointer;
}
.slick-prev {
    left: 15px;
}
.slick-next {
    right: 15px;
    background-image: url("@{active-path}css/images/slick-next.png");
}
.slick-list {
    margin: 0 75px;
}
