import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ApiService from '../../Service/api.service';

const Home = () => {
  const navigate = useNavigate(); 

  const onClickBook = (movie) => {
    const movieName = movie.name;
    ApiService.selectMovie(movieName)
      .then(response => {
        console.log("Started");
        if(response.data === "Movie present"){
          console.log("Response:", response.data);
          navigate('/Booking', { state: { selectedMovie: movie, movieData: response.data } });
        } else {
          console.log("Movie not found");
        }
      })
      .catch(error => {
        console.log('Error fetching movie data:', error);
      });
};


  return (
    <div>
      <Header />
      <div className="bg-purple-100 min-h-screen p-8">
        <div className="flex flex-col space-y-8">
          <div className="w-[90rem] h-[3rem] bg-gray-500 shadow-lg rounded-lg border border-gray-300 flex items-center">
            <span className="text-2xl font-bold text-gray-800 underline decoration-red-500 ml-4">Select Movie</span>
          </div>
          <div className="flex space-x-8">
            {[
              { name: 'FightClub', image: 'fightclub1.jpg', price: 100 },
              { name: 'The Gentlemen', image: 'thegentlemen.jpg', price: 120 },
              { name: 'John wick 3', image: 'johnwick3.jpg', price: 140 }
            ].map((movie) => (
              <div key={movie.name}>
                <div className="w-[28rem] h-[35rem] bg-white shadow-lg rounded-lg border border-gray-300 flex items-center justify-center overflow-hidden">
                  <img src={movie.image} alt={movie.name} className="w-full h-full object-contain" />
                </div>
                <div className="w-[28rem] h-[6rem] bg-gray-800 shadow-lg rounded-lg border border-gray-300 flex items-center justify-center">
                  <button
                    className="text-1.5xl font-bold text-gray-600 bg-customGreen py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => onClickBook(movie)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
