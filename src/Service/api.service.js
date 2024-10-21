import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class ApiService{
  ApiService(){

  }

  register(registrationDetails){
    console.log("registration details: " + registrationDetails);
    return axios.post(API_URL + "/register", registrationDetails);
  }

  login(userName, password){
    return axios.post(API_URL + "/login", { userName, password });
  }
  
  selectMovie(movieName) {
    return axios.post(`${API_URL}/selectMovie`, null, {
        params: {
            movieName: movieName
        }
    });
  }

  bookSeats(movieName, seatNumber){
    return axios.post(`${API_URL}/bookSeats`, {
         movieName: movieName,
         seatNumber: seatNumber
    });
  } 
}

export default new ApiService;