import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utility/movieSlice";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/552524/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer, "movie trailer");
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
