import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signupform = ({ setLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Student");

  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function changeHandler(event) {
    setSignupData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleRoleChange(role) {
    setSelectedRole(role);
  }

  function submitHandler(e) {

    e.preventDefault();
    toast.success("Your Account is Created")
    console.log("Signup Data:", signupData);
    console.log("Selected Role:", selectedRole);
     const userData = {
    ...signupData,
    role: selectedRole,
  };

  localStorage.setItem("userSignupData", JSON.stringify(userData));
setSignupData({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
    // Add API call or Toast here
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto animate-fade-in">

      {/* Role Toggle */}
      <div className="flex gap-4 mb-6 justify-center">
        <button
          type="button"
          onClick={() => handleRoleChange("Student")}
          className={`px-4 py-2 rounded-full shadow-md transition-transform duration-300 ${
            selectedRole === "Student"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-105"
              : "bg-gray-200 text-gray-700 hover:scale-105"
          }`}
        >
          Student
        </button>
        <button
          type="button"
          onClick={() => handleRoleChange("Teacher")}
          className={`px-4 py-2 rounded-full shadow-md transition-transform duration-300 ${
            selectedRole === "Teacher"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-105"
              : "bg-gray-200 text-gray-700 hover:scale-105"
          }`}
        >
          Teacher
        </button>
      </div>

      {/* Signup Form */}
      <form onSubmit={submitHandler} className="space-y-5">

        {/* First Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            First Name <sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter your First Name"
            value={signupData.firstname}
            onChange={changeHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 transition duration-300"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Last Name <sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter your Last Name"
            value={signupData.lastname}
            onChange={changeHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 transition duration-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email Address <sup className="text-red-500">*</sup>
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={signupData.email}
            onChange={changeHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 transition duration-300"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-gray-700 font-medium mb-1">
            Create Password <sup className="text-red-500">*</sup>
          </label>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={signupData.password}
            onChange={changeHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-purple-400 transition duration-300"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-10 cursor-pointer text-gray-500 hover:text-gray-700 transition"
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block text-gray-700 font-medium mb-1">
            Confirm Password <sup className="text-red-500">*</sup>
          </label>
          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            name="confirmpassword"
            placeholder="Confirm your Password"
            value={signupData.confirmpassword}
            onChange={changeHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-purple-400 transition duration-300"
          />
          <span
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-10 cursor-pointer text-gray-500 hover:text-gray-700 transition"
          >
            {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </span>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <Link to="#" className="text-sm text-purple-500 hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signupform;
