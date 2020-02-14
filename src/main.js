import {DoctorService} from './betterDoctor-service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';


$(document).ready(function() {
  let doctorRequest = new DoctorService();
  $("form#form").submit(function(event) {
    event.preventDefault();
    let searchType = $("#searchType").val();
    let searchInput = $("#searchInput").val();

    //make API request with user input
    doctorRequest.getDoctors(searchType, searchInput).then(function(data) {
      if(data.meta && data.data) {
        //do stuff with data
        console.log(data);
      } else {
        alert("Your request returned something unexpected. Please try again.");
      }
    })
  })
})

