import React from 'react';

// Functional component using props
const Navbaar = ({ day, month, year }) => {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
      <h2>🗓️ Date Information</h2>
      <p>Day: {day}</p>
      <p>Month: {month}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Navbaar;
