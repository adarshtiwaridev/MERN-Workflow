import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add, remove } from "../redux/Slices/cartslice";

const Product = ({ post }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const addHandler = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeHandler = () => {
    dispatch(remove(post.id));
    toast.success("Item removed from cart");
  };

  const isInCart = cart.some((p) => p.id === post.id);

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-100 flex flex-col">
        <img
          src={post.image}
          alt={post.title}
          className="h-64 w-full object-contain p-4 rounded-t-2xl bg-gray-50"
        />
        <div className="px-5 py-4 flex flex-col flex-1">
          <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-1">
            {post.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-blue-700">${post.price}</span>
            <button
              onClick={isInCart ? removeHandler : addHandler}
              className={`px-4 py-2 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${isInCart ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              {isInCart ? "Remove Item" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
