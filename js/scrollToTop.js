<div class="scrollToTop">
	    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 337.085 337.086" style="enable-background:new 0 0 337.085 337.086;" xml:space="preserve">
	    <path d="M168.54,0C75.619,0,0.012,75.609,0.012,168.543c0,92.93,75.606,168.543,168.528,168.543   c92.933,0,168.534-75.613,168.534-168.543C337.074,75.609,261.473,0,168.54,0z M271.405,224.327   c-2.407,2.402-5.561,3.615-8.713,3.615c-3.158,0-6.311-1.213-8.719-3.615L168.54,138.9l-85.424,85.427   c-4.816,4.815-12.631,4.815-17.447,0c-4.819-4.815-4.819-12.622,0-17.438l94.152-94.141c4.822-4.815,12.613-4.815,17.426,0   l94.152,94.141C276.221,211.705,276.221,219.512,271.405,224.327z" fill="#FFFFFF"/>
	    </svg>
	    <span>Наверх</span>
</div>


.scrollToTop {
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
    transition: all .25s ease;
    &:hover {
	opacity: 1;
    }
    svg {
	width: 50px;
	height: 50px;
	fill: #fff;
	background-color: @base-color;
	border-radius: 50%;
	border: 1px solid @base-color;
    }
    span {
	display: none;
    }
}

@media only screen and (max-width: 480px) {
    .scrollToTop {
	width: 100%;
	right: 0;
	bottom: 0;
	padding: 10px;
	svg {
	    // перенести svg вправо
	    display: none;
	}
	span {
	    display: block;
	}
    }
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
