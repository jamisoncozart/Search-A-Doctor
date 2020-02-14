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
      console.log(data);
      if(data.meta && data.data) {
        let domAppendString = "";
        let available = false;
        let panelColor = "danger";
        for(let i = 0; i < data.data.length; i++) {
          for(let x = 0; x < data.data[i].practices.length; x++) {
            if(data.data[i].practices[x].accepts_new_patients) {
              available = true;
              panelColor = "success";
              break;
            }
          }
          domAppendString += `<div class="doctor card border-${panelColor}"><div class="card-header border-${panelColor}"><h2 class="docName">${data.data[i].profile.first_name} ${data.data[i].profile.last_name} ${data.data[i].profile.title}</h2></div><div class="card-body"><h3 class="specialty">${data.data[i].specialties[0].description}</h3><p class="bio">${data.data[i].profile.bio}</p><p class="docAvailability"><strong>Available: ${available}</strong></p><p class="practiceTitle"><strong>${data.data[i].practices[0].name}:</strong></p><ul class="docInfo"><li class="address">Address: ${data.data[i].practices[0].visit_address.street} ${data.data[i].practices[0].visit_address.city} ${data.data[i].practices[0].visit_address.state} ${data.data[i].practices[0].visit_address.zip}</li><li class="phone">Phone: ${data.data[i].practices[0].phones[0].number}</li><li class="website">Website: </li></ul></div></div>`
        }
        $("div#doctors").html(domAppendString);
      } else {
        alert("Your request returned something unexpected. Please try again.");
      }
    })
  })
})

