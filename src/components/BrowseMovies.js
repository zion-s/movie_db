import React from "react";
import { Col, Row } from "react-bootstrap";
import "../App.css";
import MovieCard from "./MovieCard";

const BrowseMovies = (props) => {
  const tabs = [
    "New Release",
    "Upcoming",
    "Action",
    "Comedy",
    "Crime",
    "Drama",
    "Thriller",
    "Sci-fi",
    "Family",
    "Horror",
  ];

  return (
    <>
      <h2>Browse movies by category</h2>
      <div className="mt-5">
        {tabs.map((tab, i) => {
          return (
            <span className={i === 0 ? "tab_active" : "tab"} key={i}>
              {tab}
            </span>
          );
        })}
      </div>
      <Row className="mt-5">
        {props.movies?.length > 0 &&
          props.movies.map((movie, i) => {
            return (
              <Col className="col-3" key={movie.id}>
                <MovieCard movie={movie} key={movie.id} />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default BrowseMovies;
