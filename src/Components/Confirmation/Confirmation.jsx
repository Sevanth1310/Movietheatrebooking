import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Confirmation = () => {
  const location = useLocation();
  const { selectedSeats, selectedMovie } = location.state || {};

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Booking Confirmation</h2>
          {selectedMovie && selectedSeats ? (
            <>
              <p className="text-lg text-green-500 font-semibold mb-4">
                Your seats for <strong>{selectedMovie}</strong> have been booked successfully.
              </p>
              <p className="text-blue-600">
                Seats: {selectedSeats.join(', ')}
              </p>
              <p className="text-gray-700 mt-4">
                Thank you for booking with us! Enjoy the movie.
              </p>
            </>
          ) : (
            <p className="text-red-500 font-semibold">
              Error: Booking details are missing.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
