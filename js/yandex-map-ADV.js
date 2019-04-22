var sales = JSON.parse(localStorage.getItem('sales'));
var partners = JSON.parse(localStorage.getItem('partners'));
var myMap;
var placemarkCollections = {};
var placemarkList = {};

var contactsList = [
  {
    'officeName': 'Отдел продаж',
    'cities': sales,
    'iconLayout': 'default#image',
    'iconImageHref': '/sites/all/themes/svay/images/contacts-icons/red-marker.png',
    'iconImageSize': [28, 39],
    'iconImageOffset': [-35, -45]
  },

  {
    'officeName': 'Партнеры по Horeca',
    'cities': partners,
    'iconLayout': 'default#image',
    'iconImageHref': '/sites/all/themes/svay/images/contacts-icons/blue-marker.png',
    'iconImageSize': [28, 39],
    'iconImageOffset': [-35, -45]
  }
];

ymaps.ready(init);

function init() {
  myMap = new ymaps.Map("map", {
    center: [54.96545900361182,73.34413889843748],
    zoom: 4,
    controls: ['smallMapDefaultSet'],
    zoomMargin: [20]
  }),
      zoomButton = new ymaps.control.Button("Отдалить");
  myMap.controls.add(zoomButton, {float: 'right'});

  for (var i = 0; i < contactsList.length; i++) {
    // Создаём коллекцию меток для отделов
    var officesCollection = new ymaps.GeoObjectCollection();

    for (var c = 0; c < contactsList[i].cities.length; c++) {
      var officeName = contactsList[i].officeName;
      var cityInfo = contactsList[i].cities[c];
      var cityIconLayout = contactsList[i].iconLayout;
      var cityIconHref = contactsList[i].iconImageHref;
      var cityIconSize = contactsList[i].iconImageSize;
//      var cityIconImageOffset = contactsList[i].iconImageOffset;

      if (officeName == 'Отдел продаж') {
        var salesCoords = JSON.parse("[" + cityInfo.field_off_sales_coords[0].value + "]");
        var citiesPlacemark = new ymaps.Placemark(
            salesCoords,
            {
              hintContent: cityInfo.field_off_sales_address[0].value,
              balloonContentHeader: cityInfo.field_off_sales_address[0].value,
              balloonContentBody: 'Телефон: ' + cityInfo.field_off_sales_phone[0].value + ' Email: ' + cityInfo.field_off_sales_email[0].value
            },
            {
              iconLayout: cityIconLayout,
              iconImageHref: cityIconHref,
              iconImageSize: cityIconSize,
//            iconImageOffset: cityIconImageOffset
            }
        );
      } else {
        var partnersCoords = JSON.parse("[" + cityInfo.field_off_partners_coords[0].value + "]");
        var citiesPlacemark = new ymaps.Placemark(
            partnersCoords,            
            {
              hintContent: cityInfo.field_off_partners_address[0].value,
              balloonContentHeader: cityInfo.field_off_partners_address[0].value,
              balloonContentBody: cityInfo.field_off_partners_phone[0].value + ' ' + cityInfo.field_off_partners_email[0].value
            },
            {
              iconLayout: cityIconLayout,
              iconImageHref: cityIconHref,
              iconImageSize: cityIconSize,
//            iconImageOffset: cityIconImageOffset
            }
        );
      }



      if (!placemarkList[i])
        placemarkList[i] = {};
      placemarkList[i][c] = citiesPlacemark;

      // Добавляем метку в коллекцию
      officesCollection.add(citiesPlacemark);
    }

    placemarkCollections[i] = officesCollection;
    myMap.geoObjects.add(officesCollection);
  }

  // <---- events

  zoomButton.events.add('click', function (e) {
    e.preventDefault();
    myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange: true});
  });

  officesCollection.events.add('click', function (e) {
    e.preventDefault();
    myMap.panTo(e.get('target').geometry.getCoordinates())
        .then(function () {
          myMap.setZoom(16);
          e.get('target').balloon.open();
        });
  });
  // <---- end events

  // запрещаем скролл
  myMap.behaviors.disable('scrollZoom');
  // центрируем карту для показа всех меток
  // myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange: true});
}
