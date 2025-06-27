import React from "react";
import Signupform from "../pages/Signupform";
import Loginform from "../pages/Loginform";
import frame from "../assets/frame.png";

const Templates = ({ title, des1, desc2, image, formtype, setLoggedIn }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 px-4 py-8">

      {/* Left Content Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 max-w-lg">

        {/* Heading and Description */}
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-in">
            {title}
          </h1>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {des1}
          </p>

          <p className="text-sm md:text-base text-gray-500 italic">
            {desc2}
          </p>
        </div>

        {/* Form */}
        <div className="w-full">
          {formtype === "SignUp" ? (
            <Signupform setLoggedIn={setLoggedIn} />
          ) : (
            <Loginform setLoggedIn={setLoggedIn} />
          )}
        </div>

        {/* OR Divider */}
        <div className="flex items-center w-full my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <button className="flex items-center justify-center w-full bg-blue-300 border border-gray-300 rounded-lg py-2 text-sm font-medium text-gray-700 hover:shadow-lg hover:scale-105 transition duration-300">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Logo"
            className="h-5 w-5 mr-2"
          />
          Sign up with Google
        </button>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:flex relative w-1/2 justify-center items-center">
        {/* Background Frame Image */}
        <img
          src={frame}
          alt="Frame"
          className="absolute top-6 left-20 w-80 opacity-50 -z-10"
        />

        {/* Main Signup/Login Image */}
        <img
          src={image}
          alt="Main Visual"
          className="relative w-96 rounded-xl shadow-2xl animate-fade-in-up"
        />
      </div>
    </div>
  );
};

export default Templates;
