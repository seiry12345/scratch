гугл карта
  var markersData = [
    {
	lat: 54.971289,
	lng: 73.421425,
	name: "name",
	address: "address"
    },
    {
	lat: 54.917297,
	lng: 73.294606,
	name: "name",
	address: "address"
    }
];

var map, infoWindow;
var markers = [];

function initMap() {
  var centerLatLng = new google.maps.LatLng(54.971289, 73.421425);
  var mapOptions = {
    center: centerLatLng,
    zoom: 8
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  infoWindow = new google.maps.InfoWindow();

  google.maps.event.addListener(map, "click", function () {
    infoWindow.close();
  });

  var bounds = new google.maps.LatLngBounds();

  for (var i = 0; i < markersData.length; i++) {

    var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
    var name = markersData[i].name;
    var address = markersData[i].address;

    addMarker(latLng, name, address);

    bounds.extend(latLng);
  }

  map.fitBounds(bounds);

}

function addMarker(latLng, name, address) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: name,
    icon: 'img/map.png'
  });

  google.maps.event.addListener(marker, "click", function () {
    var contentString = '<div class="infowindow">' +
            '<h3>' + name + '</h3>' +
            '<p>' + address + '</p>' +
            '</div>';

    infoWindow.setContent(contentString);
    infoWindow.open(map, marker);

  });


  markers.push(marker);
}

function markerClick(id) {
  google.maps.event.trigger(markers[id], 'click');
  map.setZoom(14);
  map.setCenter(markers[id].getPosition());
}


имитация клика в html onclick="markerClick(0)"
