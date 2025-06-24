import React from 'react';

const Filter = (props) => {
  const { filterData, catogeries, setcatgories } = props;

  function filterHandler(title) {
    setcatgories(title);
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      {filterData.map((item) => (
        <button
          onClick={() => filterHandler(item.title)} // ✅ Fixed
          key={item.id}
          className={`px-5 py-2 rounded-md hover:border-2 font-medium
            ${catogeries === item.title ? "bg-blue-800" : "bg-blue-600"}
            text-white`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
