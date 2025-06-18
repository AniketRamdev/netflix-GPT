import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1>{title}</h1>
      <p className="py-5 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-600 text-white p-4 px-8  rounded-lg">
          ▶️Play
        </button>
        <button className="bg-gray-600 text-white p-4 px-8 mx-3 rounded-lg">
          More Info !
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
