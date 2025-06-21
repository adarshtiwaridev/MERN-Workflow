import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-xs flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300">
      <img
        src={course.image.url}
        alt={course.title}
        className="w-full h-40 object-cover"
      />
      <div className="">
        <button>
            
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {course.description}
        </p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
