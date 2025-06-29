import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12   absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-5 text-l w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-8 rounded-lg hover:bg-opacity-70">
          Play
        </button>
        <button className="bg-gray-600 text-white p-4 px-8 mx-3 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
