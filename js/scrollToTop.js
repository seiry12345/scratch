<div class="scrollToTop">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           width="40px" height="40px" viewBox="0 0 444.819 444.819"
           xml:space="preserve">
      <g>
      <path d="M434.252,208.708L248.387,22.843c-7.042-7.043-15.693-10.564-25.977-10.564c-10.467,0-19.036,3.521-25.697,10.564
            L10.848,208.708C3.615,215.94,0,224.604,0,234.692c0,9.897,3.619,18.459,10.848,25.693l21.411,21.409
            c6.854,7.231,15.42,10.855,25.697,10.855c10.278,0,18.842-3.624,25.697-10.855l83.939-83.651v200.998
            c0,9.89,3.567,17.936,10.706,24.126c7.139,6.184,15.752,9.273,25.837,9.273h36.545c10.089,0,18.698-3.09,25.837-9.273
            c7.139-6.188,10.712-14.236,10.712-24.126V198.144l83.938,83.651c6.848,7.231,15.413,10.855,25.7,10.855
            c10.082,0,18.747-3.624,25.975-10.855l21.409-21.409c7.043-7.426,10.567-15.988,10.567-25.693
            C444.819,224.795,441.295,216.134,434.252,208.708z"/>
      </g>
      </svg>
</div>


.scrollToTop {
  overflow: hidden;
  display: none;
  opacity: 0.6;
  position: fixed;
  bottom: 25px;
  right: 25px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.scrollToTop:hover {
  opacity: 1;
}

.scrollToTop svg {
  width: 40px;
  height: 40px;
  fill: #ff5a19;
  border-radius: 50%;
}


$(window).scroll(function () {
	if ($(this).scrollTop() > 150) {
	    $(".scrollToTop").fadeIn();
	} else {
	    $(".scrollToTop").fadeOut();
	}
    });
    $('.scrollToTop').click(function () {
	$('html, body').animate({scrollTop: 0}, 700);
	return false;
    });
    
    
    
    var lastScrollTop = 0;
    $(window).scroll(function (e) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('header').fadeOut(150);
        } else {
            $('header').fadeIn(150);
        }
        lastScrollTop = st;
    });
    
    
    $(window).on('scroll', function () {
        var sections = $('#home, #shop, #about, #blog');
        var nav = $('.main-nav');
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - scrollOffset;
            var bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('li a').removeClass('current');
                $(this).addClass('current');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('current');
            }
        });
    });
    
    //    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
//      console.log('ура! конец страницы!')
//    }
