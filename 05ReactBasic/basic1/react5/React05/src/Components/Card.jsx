import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Cards = ({ reviews }) => {
  return (
    <div className=" relative">
      {/* Profile Image */}
      <div className="absolute -top-36 left-1/2 transform -translate-x-1/2">
        <img
          src={reviews.image}
          alt={reviews.name}
          className="w-[120px] h-[120px] rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="mt-20 text-center space-y-3">
        <h1 className="text-3xl font-bold text-black">{reviews.name}</h1>
        <span className="text-blue-500 text-sm font-medium block -mt-2">
          {reviews.job}
        </span>
        <div className="text-blue-500 text-xl flex justify-center">
          <FaQuoteLeft />
        </div>
        <p className="text-blue-700 text-sm px-6">{reviews.text}</p>
        <div className="text-blue-500 text-xl flex justify-center">
          <FaQuoteRight />
        </div>
      </div>
    </div>
  );
};

export default Cards;
