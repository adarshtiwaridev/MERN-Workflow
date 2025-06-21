import { option } from 'framer-motion/client';
import React from 'react';

const Filter = ({ filterData }) => {
  const option()=>{
    
  }
  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      {filterData.map((item) => (
        <button onClick={option}
          key={item.id}
          className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium"
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
