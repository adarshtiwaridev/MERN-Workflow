import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Card from './components/Card';
import { filterData, apiUrl } from './components/data';
import { toast } from 'react-toastify';
import "./App.css";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [catogeries, setcatgories] = useState(filterData[0].title); // ✅ Fixed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const result = await res.json();
        console.log("API Response:", result);
        setCourses(result.data);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong while fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Filter filterData={filterData} catogeries={catogeries} setcatgories={setcatgories} />
      {courses ? (
        <Card courses={courses} catogeries={catogeries} />
      ) : (
        <p className="text-center mt-10">Loading...</p>
      )}
    </div>
  );
};

export default App;
