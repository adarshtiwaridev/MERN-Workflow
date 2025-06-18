import React from 'react';
import Navbaar from './Components/Navbaar';

const App = () => {
  return (
    <div>
      <h1>🌟 Welcome to My React App</h1>

      {/* Reusable Navbaar component with props */}
      <Navbaar day="23" month="June" year="2025" />

      <br />

      {/* Reusing same component with different props */}
      <Navbaar day="1" month="January" year="2024" />
    </div>
  );
};

export default App;
