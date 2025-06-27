import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    toast.success("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-100 to-purple-100 shadow-xl rounded-lg mt-10 mb-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-700">
        Contact StudyNotion
      </h2>

      <p className="text-center text-gray-700 mb-8">
        Have questions, feedback, or suggestions? We'd love to hear from you!
      </p>

      {/* Form */}
      <form onSubmit={submitHandler} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-2 text-gray-800 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-gray-800 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-gray-800 font-medium">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={changeHandler}
            required
            placeholder="Write your message here..."
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
