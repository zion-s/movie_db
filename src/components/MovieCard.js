import React from "react";
import "../App.css";

const MovieCard = (props) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w200";
  return (
    <div>
      <img
        src={IMG_URL + props.movie.poster_path}
        alt={props.movie.title}
        className="poster"
      />
      <div>{props.movie.original_title}</div>
      <div>{props.movie.release_date}</div>
    </div>
  );
};

export default MovieCard;
