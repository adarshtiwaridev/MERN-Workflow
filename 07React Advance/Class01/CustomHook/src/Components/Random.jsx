import React, { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");
 const[loading ,setloading] =useState(false);
  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    try {
      setloading(true)
      const response = await axios.get(url);
      const imageUrl = response.data.data.images.downsized_large.url;
      setloading(false)
      setGif(imageUrl);
    } catch (error) {
      console.error("Error fetching gif:", error);
    }
  }

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 flex flex-col items-center justify-start py-4 px-4 space-y-1 w-[450px]">

      {/* Random GIF Card */}
      <div className="bg-white shadow-2xl rounded-xl p-6 w-full max-w-xl flex flex-col items-center space-y-6">

        {/* Heading */}
        <h1 className="text-2xl font-extrabold text-purple-700 uppercase tracking-wide">
          Random Gif Generator
        </h1>

        {/* Image */}
        {   loading ?(<Spinner/>):(      <img
            src={gif}
          
            className="rounded-md shadow-md max-h-72 object-contain border border-gray-300"
          />)
}

        {/* Button */}
        <button
          onClick={clickHandler}
          className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-800 transition duration-200 shadow-sm"
        >
          Generate GIF
        </button>
      </div>


    </div>
  );
};

export default Random;
