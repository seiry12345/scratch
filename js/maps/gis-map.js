<script src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"></script>

var map;
DG.then(function () {
  map = DG.map('map', {
    center: [lat,long],
    zoom: 17,
    scrollWheelZoom: false,
    touchZoom: false,
  });

  DG.marker([lat,long]).addTo(map).bindPopup('<strong>title</strong><br> address <br> Телефоны: <strong>phone</strong><br>Почта: <strong>mail</strong>');
});



// http://api.2gis.ru/doc/maps/ru/quickstart/
