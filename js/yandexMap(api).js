https://codd-wd.ru/shpargalka-yandeks-karty-yandex-maps-api/

html
<script src="http://api-maps.yandex.ru/2.1.17/?lang=ru_RU" type="text/javascript"></script>
<div class="wrapper">
	<div id="map"></div>
</div>
  
js 
var map;
var geomap;

jQuery(function () {
  var map = document.getElementById('map');
  if (map !== null) {
    ymaps.ready(init);
  }
});

function init() {
  map = new ymaps.Map('map', {
    center: [123, 123],
    zoom: 18,
    controls: ['smallMapDefaultSet'],
  });
  var objectManager = new ymaps.ObjectManager({
    geoObjectOpenBalloonOnClick: false
  });
  zoomButton = new ymaps.control.Button("Отдалить");
  map.controls.add(zoomButton, {float: 'right'});


  company_adress = new ymaps.Placemark([123, 123], {
    balloonContentHeader: "title",
    balloonContentBody: "address",
    balloonContentFooter: "phone"}, {
    iconLayout: 'default#image',
    iconImageHref: '/images/pin.png',
    iconImageSize: [64, 64],
    iconImageOffset: [-32, -64]
  });

  company_adress2 = new ymaps.Placemark([123, 123], {
    balloonContentHeader: "title",
    balloonContentBody: "address",
    balloonContentFooter: "phone"}, {
    iconLayout: 'default#image',
    iconImageHref: '/images/pin.png',
    iconImageSize: [64, 64],
    iconImageOffset: [-32, -64]
  });

  map.geoObjects.add(company_adress);
  map.geoObjects.add(company_adress2);

  map.behaviors.disable('scrollZoom');
  map.setBounds(map.geoObjects.getBounds());
  map.geoObjects.add(objectManager);


  zoomButton.events.add('click', function (e) {
    e.preventDefault();
    map.setBounds(map.geoObjects.getBounds(), {checkZoomRange: true});
  });

  map.geoObjects.events.add('click', function (e) {
    map.panTo(e.get('target').geometry.getCoordinates())
        .then(function () {
          map.setZoom(16);
          e.get('target').balloon.open();
        });
  });
}








ymaps.ready(function () {
    var location = ymaps.geolocation.get();
    // Асинхронная обработка ответа.
    location.then(
            function (result) {              
              var loc = result.geoObjects.get(0).getAdministrativeAreas();
              var country = result.geoObjects.get(0).getCountry();
              var loc2 = result.geoObjects.get(0).getLocalities();
              console.log(loc);
              console.log(loc2);
              console.log(country);
              // Добавление местоположения на карту.
              //myMap.geoObjects.add(result.geoObjects)
            },
            function (err) {
              console.log('Ошибка: ' + err)
            }
    );
  });
