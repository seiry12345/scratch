var href = $(this).find('h3 a').attr('href');
window.location.href = href;

// pseudo url on item
    function targetHref(selectorContainer, selector) {
      if ($(selectorContainer).length) {
        let item = $(selector);

        item.on('click', function () {
          let href = $(this).find('h3 a').attr('href');
          window.location.href = href;
        });
      }
    }

    targetHref('.front-services', '.front-services .views-row');
    targetHref('.product-wrapper', '.view-product .views-row');
