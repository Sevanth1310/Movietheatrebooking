import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';
import Confirmation from './Components/Confirmation/Confirmation';
import Registration from './Components/Registration/Registration'; 
import ApiService from './Service/api.service';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Registration />} /> {/* Set Registration as the default route */}
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
