import {DoctorService} from './betterDoctor-service.js';
import { appendDoctors } from './append.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';


$(document).ready(function() {
  const doctorRequest = new DoctorService();
  const doctorDiv = $("div#doctors");
  $("form#form").submit(function(event) {
    event.preventDefault();
    let searchType = $("#searchType").val();
    let searchInput = $("#searchInput").val();

    //make API request with user input
    doctorRequest.getDoctors(searchType, searchInput).then(function(data) {
      console.log(data);
      if(data.meta && data.data) {
        appendDoctors(data, doctorDiv);
      } else {
        alert("Your request returned something unexpected. Please try again.");
      }
    })
  })
})

