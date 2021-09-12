import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const RecCard = (props) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w300";
  return (
    <Link to={`/movie/${props.movie.id}`}>
      <div>
        <img
          src={IMG_URL + props.movie.backdrop_path}
          alt={props.movie.title}
          className="poster"
        />
        <div className="d-flex justify-content-between align-items-center">
          <div>{props.movie.title}</div>
          <div>{props.movie.vote_average}</div>
        </div>
      </div>
    </Link>
  );
};

export default RecCard;
