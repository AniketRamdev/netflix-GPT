import React, { useRef } from "react";
import lang from "../Utility/language";
import { useSelector } from "react-redux";
import openai from "../Utility/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // API call to get movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of best 5 movies, comma seperated like - Eg: Hera Pheri, Sholay, Don, Dhoom, etc.";

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "developer", content: "Talk like a pirate." },
        { role: "user", content: gptQuery },
      ],
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[10%] md:pt[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-10 rounded-lg "
        />
        <button
          className="py-2 px-4 m-4 col-span-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
