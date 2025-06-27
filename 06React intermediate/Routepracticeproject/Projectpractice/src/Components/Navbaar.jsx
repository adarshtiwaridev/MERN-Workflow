import React from "react";
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbaar = ({ islogin, setLoggedin }) => {
  const navigate = useNavigate();

  // ✅ Navigation Handlers
  const handleDashboard = () => {
    toast.success("Navigating to Dashboard!");
    navigate("/Dashboard");
  };

  const handleLogin = () => {
    toast.success("Login page")
    navigate("/Login");
  };

  const handleSignup = () => {
    toast.success("Signup page ")
    navigate("/Signup");
  };

  const handleLogout = () => {
    setLoggedin(false);
    toast.success("Successfully Logged Out!");
    navigate("/");
  };

  return (
    <nav className="bg-amber-950 shadow-md py-3 px-6 flex justify-between items-center text-white">
      {/* ✅ Left - Logo */}
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* ✅ Center - Links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-300 font-medium">Home</Link>
        <Link to="/about" className="hover:text-yellow-300 font-medium">About</Link>
        <Link to="/services" className="hover:text-yellow-300 font-medium">Services</Link>
        <Link to="/contact" className="hover:text-yellow-300 font-medium">Contact</Link>
      </div>

      {/* ✅ Right - Auth Buttons */}
      <div className="flex gap-3">
        {!islogin && (
          <>
            <button
              onClick={handleLogin}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-1 px-4 rounded transition duration-300"
            >
              Login
            </button>
            <button
              onClick={handleSignup}
              className="bg-green-500 hover:bg-green-600 text-black font-semibold py-1 px-4 rounded transition duration-300"
            >
              Signup
            </button>
          </>
        )}

        {islogin && (
          <>
            <button
              onClick={handleDashboard}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded transition duration-300"
            >
              Dashboard
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded transition duration-300"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbaar;
