import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MovieCard = (props) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w200";
  return props.cast ? (
    <div>
      <img
        src={IMG_URL + props.cast.profile_path}
        alt={props.cast.original_name}
        className="poster"
      />
      <div>{props.cast.original_name}</div>
      <div>{props.cast.character}</div>
    </div>
  ) : (
    <Link to={`movie/${props.movie.id}`}>
      <div>
        <img
          src={IMG_URL + props.movie.poster_path}
          alt={props.movie.title}
          className="poster"
        />
        <div>{props.movie.original_title}</div>
        <div>{props.movie.release_date}</div>
      </div>
    </Link>
  );
};

export default MovieCard;
