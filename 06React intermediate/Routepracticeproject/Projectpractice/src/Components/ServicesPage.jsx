import React from "react";
import ServicesCard from "./ServicesCard";
import { FaLaptopCode, FaChalkboardTeacher, FaUserGraduate, FaMobileAlt } from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      title: "Live Courses",
      description: "Attend interactive live classes by expert educators from anywhere.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Recorded Lectures",
      description: "Access pre-recorded lectures anytime, anywhere at your own pace.",
      icon: <FaUserGraduate />,
    },
    {
      title: "Web & App Learning",
      description: "Study seamlessly on both web and mobile platforms with offline access.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Project-Based Learning",
      description: "Work on real-world projects and build your portfolio while learning.",
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">Our Services at StudyNotion</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
