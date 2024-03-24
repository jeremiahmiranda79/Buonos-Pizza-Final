function myMap() {
  var mapProp= {
    center: new google.maps.LatLng(33.30722 ,-111.75850),
    zoom: 20,
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),   mapProp);
}