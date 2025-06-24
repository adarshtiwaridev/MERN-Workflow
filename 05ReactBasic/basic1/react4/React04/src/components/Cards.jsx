import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

// 🔥 Fast & Crisp Animation
const trendingAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -8,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.60,      // ⏱️ Fast
      type: "spring",
      stiffness: 250,      // 🎯 Crisp motion
      damping: 15,         // 🧘‍♂️ Less wobble
    },
  },
};

const CourseCard = ({ course }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      toast.success("Liked ❤️");
    } else {
      setLiked(false);
      toast.warn("Removed Like ❌");
    }
  };

  return (
    <motion.div
      variants={trendingAnimation}
      initial="hidden"
      animate="visible"
      className="max-w-xs flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 relative"
    >
      <img
        src={course.image?.url || "https://via.placeholder.com/300"}
        alt={course.title}
        className="w-full h-40 object-cover"
      />

      {/* Like Button */}
      <div className="absolute top-42 right-2 z-10">
        <button onClick={handleLike}>
          {liked ? (
            <FcLike fontSize="1.75rem" />
          ) : (
            <FcLikePlaceholder fontSize="1.75rem" />
          )}
        </button>
      </div>

      {/* Content */}
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
    </motion.div>
  );
};

export default CourseCard;
