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
      });
    } else {
      $("#locationOutput").html("Geolocation is not supported by this browser");
    }
  });
  $("form#form").submit(function(event) {
    event.preventDefault();
    let searchType = $("#searchType").val();
    let searchInput = $("#searchInput").val();

    //make API request with user input
    doctorRequest.getDoctors(searchType, searchInput).then(function(data) {
      console.log(data);
      if(data.meta && data.data) {
        appendDoctors(data, doctorDiv, latitude, longitude);
      } else {
        alert("Your request returned something unexpected. Please try again.");
      }
    });
  });
});