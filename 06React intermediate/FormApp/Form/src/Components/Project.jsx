import React, { useState } from 'react';

const Project = () => {
  const intialdata={
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    postalcode: "",
    check1: false,
    check2: false,
    radio: "",
    country: "",
  }
  const [maindata, setmaindata] = useState(intialdata);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;

    setmaindata((prevformdata) => ({
      ...prevformdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Submitted ✅", maindata);
    setmaindata(intialdata);
  }

  return (
    <div>
      <form
        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
        onSubmit={submitHandler}
      >
        {/* First Name */}
        <div>
          <label htmlFor="firstname" className="block text-gray-700 font-semibold mb-1">
            First Name:
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter First Name"
            value={maindata.firstname}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastname" className="block text-gray-700 font-semibold mb-1">
            Last Name:
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter Last Name"
            value={maindata.lastname}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={maindata.email}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-1">
            Address:
          </label>
          <textarea
            name="address"
            id="address"
            rows="3"
            placeholder="Enter your address"
            value={maindata.address}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-gray-700 font-semibold mb-1">
            Country:
          </label>
          <select
            name="country"
            id="country"
            value={maindata.country}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="postalcode" className="block text-gray-700 font-semibold mb-1">
            Postal Code:
          </label>
          <input
            type="text"
            name="postalcode"
            id="postalcode"
            placeholder="Enter postal code"
            value={maindata.postalcode}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Email Notifications */}
        <fieldset className="border border-gray-300 rounded-lg p-4">
          <legend className="font-semibold text-gray-700 mb-2">By Email:</legend>

          <div className="flex items-start space-x-2 mb-2">
            <input
              type="checkbox"
              name="check1"
              id="check1"
              checked={maindata.check1}
              onChange={changeHandler}
              className="mt-1"
            />
            <label htmlFor="check1" className="text-gray-700">
              <span className="font-medium">Comments:</span>
              <br />
              <span className="text-sm text-gray-500">Get notified on comments.</span>
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="check2"
              id="check2"
              checked={maindata.check2}
              onChange={changeHandler}
              className="mt-1"
            />
            <label htmlFor="check2" className="text-gray-700">
              <span className="font-medium">College:</span>
              <br />
              <span className="text-sm text-gray-500">Get notified on college posts.</span>
            </label>
          </div>
        </fieldset>

        {/* Push Notification Radio */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="radio"
              id="radio1"
              value="everything"
              checked={maindata.radio === "everything"}
              onChange={changeHandler}
              className="h-4 w-4 text-indigo-600"
            />
            <label htmlFor="radio1" className="text-gray-700">Everything</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="radio"
              id="radio2"
              value="same as email"
              checked={maindata.radio === "same as email"}
              onChange={changeHandler}
              className="h-4 w-4 text-indigo-600"
            />
            <label htmlFor="radio2" className="text-gray-700">Same as Email</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="radio"
              id="radio3"
              value="no push notification"
              checked={maindata.radio === "no push notification"}
              onChange={changeHandler}
              className="h-4 w-4 text-indigo-600"
            />
            <label htmlFor="radio3" className="text-gray-700">No Push Notification</label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg font-bold hover:bg-indigo-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Project;
