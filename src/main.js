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
        let domAppendString = "";
        let available = false;
        let panelColor = "danger";
        let docAddress = "";
        for(let i = 0; i < data.data.length; i++) {
          for(let x = 0; x < data.data[i].practices.length; x++) {
            if(data.data[i].practices[x].accepts_new_patients) {
              available = true;
              panelColor = "success";
              break;
            }
          }
          domAppendString += `<div class="doctor card card-${panelColor}"><div class="card-header"><h2 class="docName">${data.data[i].profile.first_name} ${data.data[i].profile.last_name} ${data.data[i].profile.title}</h2></div><div class="card-body"><p class="bio">${data.data[i].profile.bio}</p><ul class="docInfo"><li class="docAvailability>${available}</li><li class="address">${data.data[i].}</li></ul></div></div>`
        }
      } else {
        alert("Your request returned something unexpected. Please try again.");
      }
    })
  })
})

