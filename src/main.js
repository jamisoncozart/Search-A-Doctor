import {DoctorService} from './betterDoctor-service.js';
import { appendDoctors } from './append.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';


$(document).ready(function() {
  const doctorRequest = new DoctorService();
  const doctorDiv = $("div#doctors");
  let latitude;
  let longitude;
  $("#locationBtn").click(function(event) {
    event.preventDefault();
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      }, handleLocationError);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  });
  $("#formSubmit").click(function(event) {
    event.preventDefault();
    let searchType = $("#searchType").val();
    let searchInput = $("#searchInput").val();

    //make API request with user input
    doctorRequest.getDoctors(searchType, searchInput, latitude, longitude).then(function(data) {
      if(data.meta && data.data) {
        appendDoctors(data, doctorDiv);
      } else {
        alert("Your request returned something unexpected. Please try again.");
      }
    });
  });
});

function handleLocationError(error) {
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
