function equalHeight(num, selector) {
    var discountItems = num;

    var items = $(selector);
    for (var i = 0; i < items.length; i = i + discountItems) {
      var row = items.slice(i, i + discountItems);
      var max = 0;
      $(row).each(function () {
        if ($(this).height() > max) {
          max = $(this).height();
        }
      });
      $(row).height(max);
    }
  }

if($(".front-news").length) {
        var catalogItems = 5;
        if ($(window).width() > 900) {
            catalogItems = 5;
        } else if ($(window).width() > 600) {
            catalogItems = 2;
        } else {
            catalogItems = 1;
        }

        var items = $('.front-news .news-preview');
        for (var i = 0; i < items.length; i = i + catalogItems) {
            var row = items.slice(i, i + catalogItems);
            var max = 0;
            $(row).each(function () {
                if ($(this).height() > max) {
                    max = $(this).height();
                }
            });
            $(row).height(max);
        }
}
