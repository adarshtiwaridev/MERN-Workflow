import React from 'react';
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-5xl font-bold text-red-700 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-700 mb-6">
        Sorry! The page you are looking for does not exist.
      </p>
      <Link to="/" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Pagenotfound;
