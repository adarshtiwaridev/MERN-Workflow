import React from 'react';
import { Outlet } from 'react-router-dom';

const Mainhead = () => {
  return (
    <div>
      {/* ✅ Example Header */}
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
        🌐 Welcome to Our React Router Demo Site
      </header>

      {/* ✅ Nested Routes Render Here */}
      <Outlet />

      {/* ✅ Optional Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        © 2025 All rights reserved.
      </footer>
    </div>
  );
};

export default Mainhead;
