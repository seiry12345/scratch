$('.main-nav .menu').on('click', 'a', function(e) {
      var target = $(e.target);
      if(target.text() == 'Интерьер Камень') {
        e.preventDefault();
        window.open($(this).attr('href'), '_blank');
        return false;
      }
    });
