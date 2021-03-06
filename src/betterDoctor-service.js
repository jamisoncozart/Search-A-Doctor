export class DoctorService {
  async getDoctors(searchType, searchInput, latitude, longitude) {
    if(latitude && longitude) {
      try {
        let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?${searchType}=${searchInput}&location=${latitude}%2C${longitude}%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
        if(response.ok && response.status == 200) {
          let jsonifiedResponse = await response.json();
          return jsonifiedResponse;
        } else {
          throw Error("Error: API request failed. Please try again");
        }
      } catch(error) {
        return error.message;
      }
    } else {
      try {
        let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?${searchType}=${searchInput}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
        if(response.ok && response.status == 200) {
          let jsonifiedResponse = await response.json();
          return jsonifiedResponse;
        } else {
          throw Error("Error: API request failed. Please try again");
        }
      } catch(error) {
        return error.message;
      }
    }
  }
}