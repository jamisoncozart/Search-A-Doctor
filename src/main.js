import {DoctorService} from './betterDoctor-service.js';
import {appendDoctors} from './append.js';
import {Position} from './position.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';


$(document).ready(function() {
  const doctorRequest = new DoctorService();
  const position = new Position();
  const doctorDiv = $("div#doctors");
  const mapImage = $("iframe");
  let latitude;
  let longitude;
  $("#locationBtn").click(function(event) {
    event.preventDefault();
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(userPosition) {
        latitude = userPosition.coords.latitude;
        longitude = userPosition.coords.longitude;
        position.showPosition(latitude, longitude, mapImage);
      }, position.handleLocationError);
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
        console.log('in data if');
        doctorDiv.html(appendDoctors(data));
      } else {
        doctorDiv.html(data);
      }
    });
  });
});