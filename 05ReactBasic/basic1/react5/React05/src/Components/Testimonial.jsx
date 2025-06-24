import React, { useState } from "react";
import Cards from "./Card";

const Testimonial = (props) => {
  const reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function prevHandler() {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }

  function nextHandler() {
    setIndex((prev) => (prev + 1) % reviews.length);
  }

  function surpriseHandler() {
    let random;
    do {
      random = Math.floor(Math.random() * reviews.length);
    } while (random === index);
    setIndex(random);
  }

  return (
    <div className="w-[500px] h-[450px] mt-16 mx-auto bg-white rounded-xl shadow-2xl p-6">
      <Cards reviews={reviews[index]} />

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-5">
        <button
          className="bg-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-400 transition"
          onClick={prevHandler}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 px-5 py-2 rounded-md text-white font-semibold text-sm hover:bg-blue-600 transition"
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-400 transition"
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
