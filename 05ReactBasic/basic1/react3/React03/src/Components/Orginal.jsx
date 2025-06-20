import React, { useState } from 'react';

const Orginal = () => {
  const [count, setCount] = useState(0);

  const incHandler = () => setCount(count + 1);
  const desHandler = () => setCount(count - 1);
  const resetHandler = () => setCount(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="bg-white border border-gray-200 shadow-2xl shadow-black/30 rounded-3xl p-10 w-full max-w-sm space-y-8 transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 tracking-wide">
          🔢 Modern React Counter
        </h2>

        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={desHandler}
            className="w-14 h-14 bg-gradient-to-tr from-red-500 to-red-700 text-white text-3xl rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
          >
            –
          </button>

          <span className="text-4xl font-bold text-gray-800 drop-shadow">{count}</span>

          <button
            onClick={incHandler}
            className="w-14 h-14 bg-gradient-to-tr from-green-500 to-green-700 text-white text-3xl rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
          >
            +
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={resetHandler}
            className="mt-4 px-6 py-2 bg-gradient-to-tr from-gray-800 to-black text-white rounded-full text-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            🔁 Reset Counter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orginal;
