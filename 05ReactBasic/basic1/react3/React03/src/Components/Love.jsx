import React, { useState } from 'react';
import cityData from './data';
import Card from './Card';

const Love = () => {
  const [cards, setCards] = useState(cityData);

  const removeBox = (id) =>
    setCards((prev) => prev.filter((city) => city.id !== id));

  if (cards.length===0) {
    return(
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div
      className="text-center bg-white p-10 rounded-3xl shadow-2xl border border-gray-200 animate-fade-in transition-all duration-500"
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        No Tours Left
      </h2>
      <button
        onClick={() => setCards(cityData)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Refresh Page
      </button>
    </div>
  </div>
    )

  }

  return (
    <div>
      <Card cards={cards} removeBox={removeBox} />
    </div>
  );
};

export default Love;
