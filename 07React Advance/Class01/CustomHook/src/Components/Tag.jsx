import React, { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");  // ✅ New state for user input

  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;  // ✅ Tag added in API URL
    try {
      setLoading(true);
      const response = await axios.get(url);
      const imageUrl = response.data.data.images.downsized_large.url;
      setGif(imageUrl);
    } catch (error) {
      console.error("Error fetching gif:", error);
    } finally {
      setLoading(false);
    }
  }

  function clickHandler() {
    if (tag.trim() !== "") {
      fetchData();
    } else {
      alert("Please enter a tag first!");
    }
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 flex flex-col items-center justify-center py-6 px-4 space-y-4 w-full max-w-md mx-auto rounded-xl shadow-lg">

      <h1 className="text-xl font-extrabold text-white uppercase tracking-wider text-center">
        Random  {tag}  Gif
      </h1>

      <div className="bg-white shadow-xl rounded-lg p-6 w-full flex flex-col items-center space-y-4">

        {/* Loader or Image */}
        {loading ? (
          <Spinner />
        ) : (
          gif && (
            <img
              src={gif}
              alt="Random Gif"
              className="rounded-md shadow-md max-h-72 object-contain border border-gray-300"
            />
          )
        )}

        {/* Input Box */}
        <input
          type="text"
          placeholder="Enter tag here (e.g., cat, funny)"
          value={tag}
          onChange={changeHandler}
          className="w-10/12 border border-purple-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

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

export default Tag;
