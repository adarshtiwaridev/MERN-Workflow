import React from "react";
import Testimonial from "./Components/Testimonial";
import reviews from "./Components/Data";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-blue-600">Testimonial</span>
        </h1>
        <div className="w-[80px] h-1 bg-blue-600 mx-auto rounded-full mb-2"></div>
        <p className="text-gray-600 text-sm sm:text-base">
          Hear what our learners have to say about us.
        </p>
      </div>

      {/* Component Call */}
      <Testimonial reviews={reviews} />
    </div>
  );
};

export default App;
