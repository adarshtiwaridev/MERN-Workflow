import React from 'react';
import Box from './Box';

const Card = ({ cards, removeBox }) => {
  return (
    <div>
      <h1
  className="text-4xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 drop-shadow-md animate-slide-up"
>
  Plan Your Trip
</h1>


      {cards.map((city) => (
        <Box key={city.id} {...city} removeBox={removeBox} />
      ))}
    </div>
  );
};

export default Card;
