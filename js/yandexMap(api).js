html
<script src="http://api-maps.yandex.ru/2.1.17/?lang=ru_RU" type="text/javascript"></script>
<div class="wrapper">
	<div id="map"></div>
</div>
  
js 
var map;
var geomap;

$(function () {
    var map = document.getElementById('map');
    if (map !== null) {
	ymaps.ready(init);
    }
});

function init() {
    map = new ymaps.Map('map', {
	center: [, ],
	zoom: 15
    });
    company_1 = new ymaps.Placemark([, ], {
	balloonContentHeader: "организация",
	balloonContentBody: "адрес",
	balloonContentFooter: "контакты"}, {
	iconLayout: 'default#image',
	iconImageSize: [40, 51]
    });


    company_2 = new ymaps.Placemark([, ], {
	balloonContentHeader: "организация",
	balloonContentBody: "адрес",
	balloonContentFooter: "контакты"}, {
	iconLayout: 'default#image',
	iconImageSize: [40, 51]
    });

    map.geoObjects.add(company_1);
    map.geoObjects.add(company_2);

    map.setBounds(map.geoObjects.getBounds());

    map.geoObjects.events.add('click', function (e) {
	var coords = e.get('coords');
	var myCoords = coords[0].toPrecision(14);
	map.setCenter(myCoords);
	map.setZoom(16);
    });
}
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
