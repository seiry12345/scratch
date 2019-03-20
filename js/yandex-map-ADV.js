var myMap;
var placemarkCollections = {};
var placemarkList = {};

// Список отделов и городов в них
var contactsList = [
  {
    'officeName': 'Отдел продаж',
    'cities': [
      {'coordinates': [55.72532368326033, 37.748675112058876], 'header': 'организация', 'body': 'контакты'},
      {'coordinates': [55.701677873469, 37.57358050756649], 'header': 'организация', 'body': 'контакты'}
    ],
    'iconLayout': 'default#image',
    'iconImageHref': '/sites/all/themes/images/contacts-icons/red-marker.png',
    'iconImageSize': [28, 39],
    'iconImageOffset': [-35, -45]
  },

  {
    'officeName': 'Партнеры',
    'cities': [
      {'coordinates': [59.863210042666125, 30.37903938671841], 'header': 'организация', 'body': 'контакты'},
      {'coordinates': [59.99486277158917, 30.406505207030918], 'header': 'организация', 'body': 'контакты'},
    ],
    'iconLayout': 'default#image',
    'iconImageHref': '/sites/all/themes/images/contacts-icons/blue-marker.png',
    'iconImageSize': [28, 39],
//    'iconImageOffset': [-35, -45]
  }
];

ymaps.ready(init);

function init() {
  myMap = new ymaps.Map("map", {
    center: [56, 37],
    zoom: 8,
    controls: ['smallMapDefaultSet'],
    zoomMargin: [20]
  }),
  zoomButton = new ymaps.control.Button("Отдалить");
  myMap.controls.add(zoomButton, {float: 'right'});

  for (var i = 0; i < contactsList.length; i++) {
    // Создаём коллекцию меток для отделов
    var officesCollection = new ymaps.GeoObjectCollection();

    for (var c = 0; c < contactsList[i].cities.length; c++) {
      var cityInfo = contactsList[i].cities[c];
      var cityIconLayout = contactsList[i].iconLayout;
      var cityIconHref = contactsList[i].iconImageHref;
      var cityIconSize = contactsList[i].iconImageSize;
//      var cityIconImageOffset = contactsList[i].iconImageOffset;

      var citiesPlacemark = new ymaps.Placemark(
          cityInfo.coordinates,
          {
            hintContent: cityInfo.header,
            balloonContentHeader: cityInfo.header,
            balloonContentBody: cityInfo.body
          },
          {
            iconLayout: cityIconLayout,
            iconImageHref: cityIconHref,
            iconImageSize: cityIconSize,
//            iconImageOffset: cityIconImageOffset
          });

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
  
  zoomButton.events.add('click', function(e) {
    e.preventDefault();
    myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange: true});
  });

  officesCollection.events.add('click', function (e) {
    e.preventDefault();
    console.log(e.get('target'));
    myMap.panTo(e.get('target').geometry.getCoordinates())
        .then(function () {
          myMap.setZoom(18);
          e.get('target').balloon.open();
        });
  });
  // <---- end events
 
  // запрещаем скролл
  myMap.behaviors.disable('scrollZoom');
  // центрируем карту для показа всех меток
  myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange: true});
}
