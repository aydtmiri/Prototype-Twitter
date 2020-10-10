 function locateMe() {
  window.navigator.geolocation.getCurrentPosition(geolocationSuccess);
}
function error(msg) {
  console.log(msg);
}

function geolocationSuccess(position) {

  var coords = position.coords;
  var url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' +coords.latitude + '&lon=' + coords.longitude;

  fetch(url).then(function(response) {return response.json();}).then(function(json) {
    var city = json.address.town;
    var country = json.address.country;
    var cityElement = document.getElementById("cityElement");
    cityElement.value = city+', '+country;
  });

}
