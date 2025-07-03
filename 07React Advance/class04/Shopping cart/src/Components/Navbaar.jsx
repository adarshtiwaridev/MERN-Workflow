import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbaar = () => {
  // Placeholder for cart count, replace with actual count from redux if needed
  const cartCount = 0;
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex flex-row justify-between items-center px-8 py-3">
        <NavLink to="/">
          <h1 className="text-3xl font-extrabold tracking-tight text-blue-700 drop-shadow-sm">Shopping</h1>
        </NavLink>
        <div className="flex flex-row items-center gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-700 transition'}>
            Home
          </NavLink>
          <NavLink to="/cart" className="relative group">
            <MdShoppingCart size={28} className="text-blue-700 group-hover:text-blue-900 transition" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 shadow-md border border-white">{cartCount}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbaar;
