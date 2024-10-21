import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Person2Icon from '@mui/icons-material/Person2';

const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('username');
    if (storedUserName) {
      setUsername(storedUserName);
    }
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleShows = () => {
    navigate('/home');
  };

  const handleRegister = () => {
    navigate('/');
  }

  const handleLogout = () => {
    localStorage.removeItem('username'); // Clear the username from localStorage
    setUsername(''); // Clear the username state
    navigate('/'); // Redirect to login page on logout
  };

  return (
    <div>
      <header className="relative text-gray-900 body-font">
        {/* Transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="logo2.png"
              alt="Logo"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full mr-3" // Add margin to the right to separate the image from the text
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} // Set image as background and adjust its size and position
            />
            <span className="text-2xl">Urvashi Cinema</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-600 cursor-pointer" onClick={handleShows}>Shows</a>
            <a className="mr-5 hover:text-gray-600 cursor-pointer">Upcoming Movies</a>
            <a className="mr-5 hover:text-gray-600 cursor-pointer">About</a>
            {/* <a className="mr-5 hover:text-gray-600 cursor-pointer" onClick={handleRegister}>Register</a> */}
            {!username ? (
              <a className="mr-5 hover:text-gray-600 cursor-pointer" onClick={handleLogin}>Login</a>
            ) : (
              <div className="flex items-center space-x-4">
                <bold className="flex items-center text-gray-700">
                  <Person2Icon className="mr-2" />{username}
                </bold>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
