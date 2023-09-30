
function initMap() {
  var bayArea = { lat: 37.7749, lng: -122.4194 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: bayArea
  });

  var marker = new google.maps.Marker({
    position: bayArea,
    map: map
  });
  javascript;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: bayArea,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      {
        elementType: ""
      }
    ]
  });
  /*# sourceMappingURL=bootstrap.css.map */
}
