import React, { useState } from 'react';

const Formdata = () => {
  const [productinfo, setproductinfo] = useState({
    name: "",
    date: "",
    mobile: "",
    email: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form submitted: ", productinfo);
  }

  function Onchange(event) {
    const { name, value } = event.target; // ✅ Correct destructuring
    setproductinfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded shadow w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800">User Form</h2>

        <input
          type="text"
          name="name"
          value={productinfo.name}
          onChange={Onchange}
          placeholder="Enter your name"
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <input
          type="date"
          name="date"
          value={productinfo.date}
          onChange={Onchange}
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <input
          type="tel"
          name="mobile"
          value={productinfo.mobile}
          onChange={Onchange}
          placeholder="Enter mobile"
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <input
          type="email"
          name="email"
          value={productinfo.email}
          onChange={Onchange}
          placeholder="Enter email"
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formdata;
