import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom"; // ✅ Correct named import

const Navbaar = () => {
  return (
    <div className="flex flex-row justify-around  bg-amber-600">
      <NavLink to="/">
        <h1 className="text-3xl mb-5 font-bold text-blue-600">Shopping</h1>
      </NavLink>

      <div className="flex flex-row items-center justify-around gap-3">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
          <MdShoppingCart size={24} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbaar;
