export function appendDoctors(data, doctorDiv) {
  let domAppendString = "";
  let available = false;
  let panelColor = "danger";
  if(data.data.length <= 0) {
    domAppendString = "Sorry, no doctors fit that search request. Please try again.";
  } else {
    for(let i = 0; i < data.data.length; i++) {
      for(let x = 0; x < data.data[i].practices.length; x++) {
        if(data.data[i].practices[x].accepts_new_patients) {
          available = true;
          panelColor = "success";
          break;
        }
      }
      let fullName = data.data[i].profile.first_name + " " + data.data[i].profile.last_name + " " + data.data[i].profile.title || "";
      let specialty = data.data[i].specialties[0].description || "";
      let bio = data.data[i].profile.bio || "";
      let practice = data.data[i].practices[0].name || "";
      let address = data.data[i].practices[0].visit_address.street + " " + data.data[i].practices[0].visit_address.city + ", " + data.data[i].practices[0].visit_address.state + " " + data.data[i].practices[0].visit_address.zip || "";
      let number = data.data[i].practices[0].phones[0].number || "";
      domAppendString += `<div class="doctor card border-${panelColor}"><div class="card-header border-${panelColor}"><h2 class="docName">${fullName}</h2></div><div class="card-body"><h3 class="specialty">${specialty}</h3><p class="bio">${bio}</p><p class="docAvailability"><strong>Available: ${available}</strong></p><p class="practiceTitle"><strong>${practice}:</strong></p><ul class="docInfo"><li class="address"><strong>Address: </strong>${address}</li><li class="phone"><strong>Phone: </strong>${number}</li></ul></div></div>`;
    }
  }
  doctorDiv.html(domAppendString);
}