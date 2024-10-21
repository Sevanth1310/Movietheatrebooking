import React, { useState } from 'react';

const Admin = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    movieName: '',
    image: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setNewMovie({
      ...newMovie,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ movieName: '', image: '', price: '' });
  };

  const handleEditMovie = (index) => {
    // Implement edit functionality
  };

  const handleDeleteMovie = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side: Movie table */}
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-4">Movies</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Movie Name</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Edit</th>
              <th className="py-2 px-4 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{movie.movieName}</td>
                <td className="py-2 px-4 border-b">
                  <img src={movie.image} alt={movie.movieName} className="w-16 h-16 object-cover" />
                </td>
                <td className="py-2 px-4 border-b">${movie.price}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                    onClick={() => handleEditMovie(index)}
                  >
                    Edit
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDeleteMovie(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right side: Add movie form */}
      <div className="w-1/3 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Add Movie</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Movie Name</label>
          <input
            type="text"
            name="movieName"
            value={newMovie.movieName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={newMovie.price}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          onClick={handleAddMovie}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default Admin;
