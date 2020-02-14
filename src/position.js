export class Position {
  handleLocationError(error) {
    switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
    }
  }
  showPosition(latitude, longitude, mapImage) {
    var mapURL = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=${process.env.MAPS_API_KEY}`;
    mapImage.attr('src', mapURL);
    mapImage.show();
  }
}