$('.delivery-tabs li').on('click',function() {
		$('.delivery-tabs li').removeClass('active');
		$(this).toggleClass('active');

		$('.delivery-tabs__item').removeClass('delivery-tabs__item--active');
		$('.delivery-tabs__item:eq( ' + $(this).index() + ' )').toggleClass('delivery-tabs__item--active');
	});
