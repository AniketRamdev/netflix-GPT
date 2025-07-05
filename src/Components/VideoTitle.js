import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12   absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-5 text-l w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black mt-2 py-1 md:py-4 px-3 md:p-12 rounded-lg hover:bg-opacity-70">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-600 text-white p-4 px-8 mx-3 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
