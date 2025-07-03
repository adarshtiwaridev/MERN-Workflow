import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartslice';
import { toast } from 'react-toastify';

const Cartitem = ({ item, itemIndex, isLastItem }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className={`flex items-center gap-6 p-5 bg-white rounded-xl shadow-sm ${!isLastItem ? 'mb-4 border-b border-gray-100' : ''} transition`}>
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-contain rounded-lg bg-gray-50 border"
      />
      <div className="flex-1">
        <h1 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h1>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-blue-700 font-bold text-lg">₹{item.price}</p>
          <button
            onClick={removeItem}
            className="text-red-600 hover:text-white hover:bg-red-600 border border-red-600 rounded-full p-2 transition text-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            title="Remove item"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
