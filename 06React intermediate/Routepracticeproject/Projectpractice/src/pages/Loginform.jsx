import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Loginform = ({setLoggedin}) => {
  const [showPassword, setShowPassword] = useState(false);
const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
const registerData = JSON.parse(localStorage.getItem("userSignupData"));
console.log(registerData)

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function loginhandle(e) {
      e.preventDefault();


      if (formData.email===registerData.email && formData.password===registerData.password) {
  navigate("/Dashboard")
    toast.success("Logged succesfull");
     setLoggedin(true);

      } else {
  toast.error("Wrong email and password")
      }


  }

  return (
    <form onSubmit={loginhandle}
      action=""
      className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-2xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">Login to your account</h2>

      {/* Email */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address <sup className="text-red-500">*</sup>
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col space-y-2 relative">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password <sup className="text-red-500">*</sup>
        </label>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your password"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-10 cursor-pointer text-gray-500"
        >
          {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
        </span>
        <Link to="#" className="text-xs text-blue-500 hover:underline mt-1 self-end">
          Forgot Password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
      >
        Sign In
      </button>

      {/* Optional: Divider */}
      <div className="text-center text-gray-500 text-sm">
        Don’t have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
      </div>
    </form>
  );
};

export default Loginform;
