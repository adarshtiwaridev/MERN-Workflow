import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

// ✅ Components
import Home from './components/Home';
import Contact from './components/Contact';
import Support from './components/Support';
import Abouts from './components/Abouts';
import Pagenotfound from './components/Pagenotfound';

const App = () => {
  return (
    <div>
      {/* ✅ Navigation Bar with NavLink */}
      <nav className="flex gap-8 p-4 items-center justify-center flex-row bg-gray-800">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "text-white hover:text-yellow-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "text-white hover:text-yellow-300"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "text-white hover:text-yellow-300"
          }
        >
          Support
        </NavLink>

        <NavLink
          to="/abouts"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "text-white hover:text-yellow-300"
          }
        >
          Abouts
        </NavLink>
      </nav>

      {/* ✅ Routes Setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Abouts" element={<Abouts />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
};

export default App;
