import React from 'react';

const Product = ({ post, selected }) => {
  return (
    <div className="flex  justify-center items-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="h-64 w-full object-contain p-4 rounded-t-2xl bg-gray-50"
        />

        <div className="px-5 py-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {post.title}
          </h2>

          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {post.description}
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-blue-600">${post.price}</span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              {selected ? 'Remove Item' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
