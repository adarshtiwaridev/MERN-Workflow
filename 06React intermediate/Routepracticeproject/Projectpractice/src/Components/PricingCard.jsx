import React from "react";

const PricingCard = ({ plan, price, features, highlight }) => {
  return (
    <div
      className={`${
        highlight ? "bg-purple-600 text-white" : "bg-white text-gray-800"
      } shadow-xl rounded-xl p-6 hover:scale-105 transition duration-300`}
    >
      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      <p className="text-3xl font-semibold mb-4">₹{price}/month</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            ✅ <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 rounded-lg font-semibold ${
          highlight
            ? "bg-white text-purple-600 hover:bg-gray-100"
            : "bg-purple-600 text-white hover:bg-purple-700"
        } transition duration-300`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
