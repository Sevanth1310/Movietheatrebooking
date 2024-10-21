import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ApiService from '../../Service/api.service';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  //const apiService = new ApiService();
  //let apiService;

  const onSubmit = (data) => {
    console.log("data ", data);
    ApiService.login(data.username, data.password)
        .then(response => {
            console.log("Started");
            console.log(response.data);
            if (response.data == "Data present") {
                setMessage('Login details stored successfully');
                localStorage.setItem('username', data.username);
                navigate('/home');
            } else if (response.data == "Data not present") {
                setMessage('Invalid username or password. Please try again.');
            } else {
                setMessage('Failed to store login details');
            }
        })
        .catch(error => {
            setMessage('Failed to store login details');
            console.log('Login error:', error);
        });
};

  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center bg-gray-100 p-6">
        <form className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
            {/* && operator is used to check the if there is an error and if it is truthy it will render after && */}
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
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
