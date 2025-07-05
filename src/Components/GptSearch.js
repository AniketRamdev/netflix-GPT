import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG_URL } from "../Utility/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_IMG_URL}
          alt="hero-img"
          className="h-screen object-cover"
        />
      </div>
      <div className="pt-[25%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
