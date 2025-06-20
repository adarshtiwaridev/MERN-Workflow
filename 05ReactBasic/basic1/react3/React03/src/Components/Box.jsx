import React, { useState } from 'react';

const Box = ({ id, name, info, image, price, removeBox }) => {
  const [readMore, setReadMore] = useState(false);
 const description = readMore ?info : `${info.substring(0,200)}....`
  return (
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl p-4 m-4 border border-gray-200 transition-all duration-300 hover:shadow-2xl">
  {/* Image */}
  <img
    src={image}
    alt={name}
    className="w-full md:w-1/3 h-64 object-cover rounded-xl"
  />

  {/* Text Content */}
  <div className="flex flex-col justify-between p-4 md:w-2/3">
    {/* Name & Price */}
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-2xl font-semibold text-gray-800">{name}</h4>
      <h4 className="text-xl text-green-600 font-bold">₹{price}</h4>
    </div>

    {/* Description */}
    <p className="text-gray-600 text-sm leading-relaxed">
      {readMore ? description : `${description.slice(0, 150)}...`}
      <span
        onClick={() => setReadMore(!readMore)}
        className="ml-2 text-blue-600 font-medium cursor-pointer hover:underline"
      >
        {readMore ? ' Show Less' : ' Read More'}
      </span>
    </p>

    {/* Button */}
    <div className="mt-4 flex justify-end">
      <button
        onClick={() => removeBox(id)}
        className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-md"
      >
        Not Interested
      </button>
    </div>
  </div>
</div>

  );
};

export default Box;
