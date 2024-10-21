import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ApiService from '../../Service/api.service';

const movies = [
  {
    name: 'FightClub',
    price: 100,
    occupied: [1, 64],
    totalSeats: 48,
  },
  {
    name: 'The Gentlemen',
    price: 120,
    occupied: [1, 64],
    totalSeats: 48,
  },
  {
    name: 'John wick 3',
    price: 140,
    occupied: [1, 64],
    totalSeats: 48,
  },
];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i + 1);

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialMovie = location.state?.selectedMovie || movies[0];
  const [selectedMovie, setSelectedMovie] = useState(
    movies.find((movie) => movie.name === initialMovie.name) || movies[0]
  );
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleBooking = () => {
    console.log("Started");
    console.log(selectedSeats);
    console.log(selectedMovie.name);
    ApiService.bookSeats(selectedMovie.name, selectedSeats)
      .then((response) => {
        console.log('Booking response:', response);
        if (response.data === 'Booking successful') {
          // const movieIndex = movies.findIndex(movie => movie.name === selectedMovie.name);
          // selectedSeats.forEach(seat => {
          //   if (!movies[movieIndex].occupied.includes(seat)) {
          //     movies[movieIndex].occupied.push(seat);
          //   }
          // });
          navigate('/confirmation', { state: { selectedMovie: selectedMovie.name, selectedSeats: selectedSeats } });
        } else {
          console.log('Booking failed');
        }
      })
      .catch((error) => {
        console.log('Error booking seats:', error);
      });
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center p-4 bg-gray-800 text-white">
        <Movies
          movie={selectedMovie}
          onChange={(movie) => {
            setSelectedSeats([]);
            setSelectedMovie(movie);
          }}
        />
        <ShowCase />
        <Cinema
          movie={selectedMovie}
          selectedSeats={selectedSeats}
          onSelectedSeatsChange={(selectedSeats) => setSelectedSeats(selectedSeats)}
        />
        <p className="mt-4 text-lg">
          You have selected <span className="font-bold">{selectedSeats.length}</span> seats for the price of{' '}
          <span className="font-bold">{selectedSeats.length * selectedMovie.price}₹</span>
        </p>
        <button
          onClick={handleBooking}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Book Now
        </button>
      </div>
      <Footer />
    </div>
  );
};

function Movies({ movie, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="movie" className="mr-2 font-medium">
        Pick a movie
      </label>
      <select
        id="movie"
        value={movie.name}
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
        className="p-2 border rounded text-black"
      >
        {movies.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name} (₹{movie.price})
          </option>
        ))}
      </select>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="flex space-x-4 mb-4">
      <li className="flex items-center space-x-2">
        <span className="w-4 h-4 bg-gray-600 block" /> <small>N/A</small>
      </li>
      <li className="flex items-center space-x-2">
        <span className="w-4 h-4 bg-blue-400 block" /> <small>Selected</small>
      </li>
      <li className="flex items-center space-x-2">
        <span className="w-4 h-4 bg-white border border-gray-600 block" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-gray-300 h-20 mb-2"></div>
      <span>All eyes this way!</span>
      <br></br>
      <div className="grid grid-cols-8 gap-2">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'w-8 h-8 rounded cursor-pointer',
                isSelected ? 'bg-blue-400' : 'bg-gray-600',
                isOccupied && 'bg-white border border-gray-600 cursor-not-allowed',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Booking;