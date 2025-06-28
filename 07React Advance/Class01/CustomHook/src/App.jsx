import React from 'react';
import Random from './Components/Random';
import Tag from './Components/Tag';


const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background relative items-center '>

      {/* Heading */}
      <h1 className='bg-white w-[calc(100%-40px)] left-5 right-5 top-10 absolute text-4xl font-extrabold uppercase text-center p-4 rounded-sm mx-auto'>
        Random Gif
      </h1>

      {/* Body Content */}
     <div className="flex flex-row gap-10 mt-[140px] justify-center">
  <div className="w-[450px]">
    <Random />
  </div>
  <div className="w-[450px]">
    <Tag />
  </div>
</div>

    </div>
  );
}

export default App;
