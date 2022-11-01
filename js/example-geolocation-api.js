var lat = document.getElementById("lat");
var lon = document.getElementById("lon");

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});

function simpleReverseGeocoding(lon, lat) {
  fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + lon + '&lat=' + lat)
  .then(function(response) {
    if(!response.ok) {
      throw new Error("Response not ok");
    }
    return response.json();
  }).then(function(json) {
    document.getElementById('address').innerHTML = json.display_name;
    document.getElementById('address').style.visibility = 'visible';
    document.getElementById('address-information').style.visibility = 'visible';

    map.getView().setCenter(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'));
    map.getView().setZoom(18);

  })
  .catch((error) => {
    console.error('There was an error with the fetch operation: ', error);
  })
}

map.on('click', function(e) {
  var coordinate = ol.proj.toLonLat(e.coordinate).map(function(val) {
    return val.toFixed(6);
  });
  var lon = document.getElementById('lon').value = coordinate[0];
  var lat = document.getElementById('lat').value = coordinate[1];
  simpleReverseGeocoding(lon, lat);
});

document.getElementById('reversegeocoding').addEventListener('click', function(e) {
  if (document.getElementById('lon').value && document.getElementById('lat').value) {
    simpleReverseGeocoding(document.getElementById('lon').value, document.getElementById('lat').value);
  }
});

document.getElementById('zoom-out').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation not supported by this browser";
  }
}

function showPosition(position) {
  lat.value = position.coords.latitude;
  lon.value = position.coords.longitude;
}

getLocation();
