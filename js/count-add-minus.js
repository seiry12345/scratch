 $('.count__minus').click(function (e) {
    e.preventDefault();
    changeCount('minus', $(this).parent());
  });

  $('.count__add').click(function (e) {
    e.preventDefault();    
    changeCount('plus', $(this).parent());
  });

  function changeCount(action, priceBlock) {
    var currentVal = $(priceBlock).find('.count__text').val();    
    if (action == 'plus') {
      currentVal++;
    } else if (action == 'minus' && currentVal>0) {
      currentVal--;
    } else {
      currentVal = 0;
    }
    $(priceBlock).find('.count__text').val(currentVal);
  }
