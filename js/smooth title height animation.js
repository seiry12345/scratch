if ($('.front-discounts').length) {
  $('.discounts-item').on('mouseenter', function (e) {
    var product = $(this);
    var productName = product.find('.product-item-title');
    if (productName.length > 0) {
      var em = productName.css('fontSize').replace('px', '');
      var productNameHeight = product.find('.product-item-title a').outerHeight();
      if (productNameHeight > 3 * em) {
        productName.stop(false, true).animate({// Анимация наименования
          maxHeight: productNameHeight
        }, 200);
      }
    }
    productFeaturesPosition();
  });

  $('.discounts-item').on('mouseleave', function (e) {
    var product = $(this);
    var productName = product.find('.product-item-title');
    if (productName.length > 0) {
      var em = productName.css('fontSize').replace('px', '');
      var productNameHeight = product.find('.product-item-title a').outerHeight();
      if (productNameHeight > 3 * em) { // Если наименование товара занимает более двух строк
        productName.stop(false, true).animate({
          maxHeight: '42px'
        }, 200);
      }
    }
  });
}
