import React from 'react';
import Cards from './Cards';
const Card = ({ courses }) => {
console.log("courses",courses)
 if (!courses ) {
    return <div>No course data available.</div>;
  }
 const getCourses = () => {
    let allCourses = [];

    Object.values(courses).forEach((categoryCourses) => {
      if (Array.isArray(categoryCourses)) {
        allCourses = allCourses.concat(categoryCourses);
      }
    });

    return allCourses;
  };

  const allCourses = getCourses();

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
 
       {allCourses.map((course) => (
        <Cards key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Card;
