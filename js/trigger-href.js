var href = $(this).find('h3 a').attr('href');
window.location.href = href;

// pseudo url on item
function targetHref(selector) {
  const item = $(selector);
  let href;

  item.on('click', function () {
    if ($(this).find('h2 a').attr('href') !== 'undefined') {
      href = $(this).find('h2 a').attr('href');
    } else {
      href = $(this).find('h3 a').attr('href');
    }

    window.location.href = href;
  });
}

targetHref('.front-services', '.front-services .views-row');
targetHref('.product-wrapper', '.view-product .views-row');
