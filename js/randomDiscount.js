$(function () {
	function getRandom(num) {
		var number = Math.floor(Math.random() * num);
		return number;
	}

	function setClass(n) {
		var i = getRandom(n);
		$('.guess-box').each(function (index, value) {
			if (i == index) {
				$(this).addClass('discount');
				return false;
			}
		});
	}

	setClass(4);

	$('.guess-box-wrapper').on('click', function (e) {
		var discNumb = getRandom(20);
		if ($(this).find('.guess-box').hasClass('discount')) {
			$(this).find('.guess-box').append('<p>Ur discount ' + discNumb + '%!</p>');
		} else {
			$(this).find('.guess-box').append('<p>Sorry, try later!</p>');
		}
		$('.guess-box-wrapper').off('click');
	});
});
