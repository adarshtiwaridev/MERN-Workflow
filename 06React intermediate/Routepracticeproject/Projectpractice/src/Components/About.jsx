import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">About StudyNotion</h1>

      {/* Company Description */}
      <p className="text-gray-700 text-lg mb-4">
        Welcome to <span className="font-semibold">StudyNotion</span>! We are a passionate team of developers, designers, and digital marketers helping businesses build digital products and grow their online presence. From website development to digital marketing campaigns, we offer end-to-end software solutions.
      </p>

      {/* Mission */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
      <p className="text-gray-700 mb-4">
        Our mission is simple: <span className="font-medium">Empower businesses with technology that delivers real results</span>. We focus on providing scalable, modern, and affordable digital solutions tailored to client needs.
      </p>

      {/* Core Values */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Core Values</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Client-Centric Approach</li>
        <li>Innovation and Creativity</li>
        <li>Transparency & Trust</li>
        <li>Timely Delivery</li>
      </ul>

      {/* Call to Action */}
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
