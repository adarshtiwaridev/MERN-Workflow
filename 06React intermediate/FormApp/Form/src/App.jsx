import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    password: "",
    text: "",
    vissible: true,
    mode: "",
    Favcar: "",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;

    setformdata((prevformdata) => ({
      ...prevformdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("Form submitted ✅", formdata);
    // You can send formdata to server here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">User Registration</h2>

        {/* First Name */}
        <label htmlFor="firstname" className="block text-gray-700 font-semibold mb-1">First Name:</label>
        <input
          onChange={changeHandler}
          type="text"
          id="firstname"
          name="firstname"
          value={formdata.firstname}
          placeholder="Enter First Name"
          autoComplete="given-name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Last Name */}
        <label htmlFor="lastname" className="block text-gray-700 font-semibold mb-1">Last Name:</label>
        <input
          onChange={changeHandler}
          type="text"
          id="lastname"
          name="lastname"
          value={formdata.lastname}
          placeholder="Enter Last Name"
          autoComplete="family-name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Email */}
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email:</label>
        <input
          onChange={changeHandler}
          type="email"
          id="email"
          name="email"
          value={formdata.email}
          placeholder="Enter Email"
          autoComplete="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Password */}
        <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password:</label>
        <input
          onChange={changeHandler}
          type="password"
          id="password"
          name="password"
          value={formdata.password}
          placeholder="Enter Password"
          autoComplete="current-password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Date of Birth */}
        <label htmlFor="dob" className="block text-gray-700 font-semibold mb-1">Date of Birth:</label>
        <input
          onChange={changeHandler}
          type="date"
          id="dob"
          name="dob"
          value={formdata.dob}
          autoComplete="bday"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Textarea */}
        <label htmlFor="text" className="block text-gray-700 font-semibold mb-1">Message:</label>
        <textarea
          onChange={changeHandler}
          id="text"
          name="text"
          value={formdata.text}
          placeholder="Write your message..."
          rows="1"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 overflow-hidden resize-none"
          style={{ overflow: "hidden" }}
        />

        {/* Checkbox */}
        <div className="flex flex-col items-start gap-2 mb-4">
          <div>
            <input
              type="checkbox"
              name="vissible"
              id="vissible"
              onChange={changeHandler}
              checked={formdata.vissible}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="vissible" className="ml-2 text-gray-700 font-medium">Do you like Cars?</label>
          </div>

          {/* Dropdown */}
          <div className="flex flex-row items-center gap-2">
            <label htmlFor="Favcar">Your Fav Car:</label>
            <select name="Favcar" id="Favcar" onChange={changeHandler} value={formdata.Favcar}>
              <option value="">Select a car</option>
              <option value="scorpiio">Scorpio</option>
              <option value="Thar">Thar</option>
              <option value="Legender">Legender</option>
            </select>
          </div>

          {/* Radio */}
          <div>
            <input
              type="radio"
              name="mode"
              id="online-mode"
              onChange={changeHandler}
              value="online-mode"
              checked={formdata.mode === "online-mode"}
            />
            <label htmlFor="online-mode" className="ml-2 text-gray-700 font-medium">Above data is correct</label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-lg font-bold hover:bg-indigo-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
