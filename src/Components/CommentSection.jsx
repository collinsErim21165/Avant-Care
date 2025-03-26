import React, { useState } from "react";
import { RiArrowRightWideLine } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";

const CommentSection = () => {
  const comments = [
    {
      text: "We had an AMAZING experience at Beaumont Urgent Care. Fast, friendly, and caring staff!! We had our X-ray results before we walked out the door. Should we need urgent care in the future, BEAUMONT URGENT CARE is the place we will be seen. In case you have an emergency, I urge you to give them a try, you will be happy you did!!",
      name: "Kathy",
    },
    {
      text: "We had the best experience at Beaumont Urgent Care. Travis was so great with our son and got us right in. The facility is beautiful and very clean! The staff was so friendly! I hope we don’t have anymore fractures soon, but we will definitely go back with our next bump and bruise. Thank you Travis!! We highly recommend Beaumont Urgent Care!",
      name: "Sarah Smith",
    },
    { text: "Very informative, thanks for sharing!", name: "Michael Brown" },
    { text: "Awesome content, keep it up!", name: "Emily Johnson" },
    { text: "I learned something new today!", name: "David Wilson" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure currentIndex stays within bounds
  const validIndex = currentIndex >= 0 && currentIndex < comments.length;

  const nextComment = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const prevComment = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-[60vh] group flex md:w-full relative bg-[rgb(241,241,241)] items-center justify-center space-x-4">
      {/* Left Arrow */}
      <button
        onClick={prevComment}
        className="text-2xl absolute md:left-10 left-2 z-10 transition-transform duration-300 ease-in-out"
      >
        <RiArrowLeftWideFill
          className="text-[rgb(9,71,153)] transform scale-100 opacity-70 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100 hover:-translate-x-1"
          size={40}
        />
      </button>

      {/* Comment Box (Check validIndex to prevent errors) */}
      <div className="relative flex flex-col justify-center md:px-28 px-10 items-center text-center">
        {validIndex ? (
          <>
            <p className="text-gray-700">{comments[currentIndex].text}</p>
            <p className="font-bold mt-2">{comments[currentIndex].name}</p>
          </>
        ) : (
          <p className="text-red-500">Error loading comment</p>
        )}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextComment}
        className="text-2xl md:right-10 right-2 absolute transition-transform duration-300 ease-in-out"
      >
        <RiArrowRightWideLine
          className="text-[rgb(9,71,153)] transform scale-100 opacity-70 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100 hover:translate-x-1"
          size={40}
        />
      </button>

      {/* Comment Indicators */}
      <div className="flex mt-4 space-x-2 bottom-8 absolute">
        {comments.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;