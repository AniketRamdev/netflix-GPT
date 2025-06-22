import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[13%] flex justify-center">
      <form className=" w-1/2  bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder="What do you want to watch today?"
          className="p-4 m-4 col-span-10 rounded-lg "
        />
        <button className="py-2 px-4 m-4 col-span-2 bg-red-700 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
