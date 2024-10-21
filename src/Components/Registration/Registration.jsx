import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ApiService from '../../Service/api.service';

const Registration = () => {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("data ", data);
    ApiService.register(data)
      .then(response => {
        if (response.data) {
          console.log("Response: ", response.data);
          setMessage('Registration Successful');
          navigate('/login');
        } else {
          setMessage('Failed to register');
        }
      })
      .catch(error => {
        setMessage('Failed to register');
        console.log('Registration error:', error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center bg-gray-100 p-6">
        <form className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2 text-center">Register</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch('password') || "Passwords do not match"
              })}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Phone Number"
              {...register("phoneNumber", { required: "Phone Number is required" })}
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber.message}</p>}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
