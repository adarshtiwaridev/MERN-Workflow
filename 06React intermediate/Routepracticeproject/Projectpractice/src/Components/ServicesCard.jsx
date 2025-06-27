import React from "react";

const ServicesCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition duration-300">
      <div className="text-4xl mb-4 text-purple-600">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServicesCard;
