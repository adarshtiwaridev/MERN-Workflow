import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../Redux/Slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 text-center max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">React Counter</h2>

        <div className="text-4xl font-semibold mb-6 text-gray-700">{count}</div>

        <div className="flex flex-row gap-2">
          <button
            className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white transition duration-200"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white transition duration-200"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>

          <button
            className="px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-white transition duration-200"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
