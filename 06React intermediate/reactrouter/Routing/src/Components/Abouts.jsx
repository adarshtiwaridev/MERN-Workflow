import React from 'react';

const Abouts = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">About Us</h1>

      <p className="text-gray-700 mb-3">
        Welcome to our website! This is a simple React application made for practicing React Router and Tailwind CSS.
      </p>

      <p className="text-gray-700 mb-3">
        Our team is passionate about web development and loves working with frontend technologies like React, Tailwind, and more.
      </p>

      <ul className="list-disc list-inside text-gray-700">
        <li>🚀 Fast Development</li>
        <li>🎨 Beautiful UI with Tailwind CSS</li>
        <li>🌐 Smooth Navigation using React Router</li>
      </ul>

      <div className="mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Abouts;
