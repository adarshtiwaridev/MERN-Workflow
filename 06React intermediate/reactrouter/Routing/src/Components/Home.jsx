import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* ✅ Nested Routes Outlet */}
      <Outlet />

      {/* ✅ Home Page Content */}
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-green-100 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-green-700 mb-4">🏠 Home Page</h1>
        <p className="text-gray-700">
          Welcome to the Home Page! This is the main landing page of our React Router practice project.
        </p>
        <p className="text-gray-600 mt-2">
          Navigate to different pages using the Navbar. Enjoy seamless routing without page reloads!
        </p>
      </div>
    </>
  );
};

export default Home;
