import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
  const location = useLocation();
  const username = location.state?.username;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center bg-gray-100 p-6">
        <h2 className="text-2xl">Welcome, {username}!</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
