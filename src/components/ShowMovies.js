import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Api from "../Api";
import "../App.css";
import MovieCard from "./MovieCard";

const ShowMovies = (props) => {
  const [searchTerm, setTerm] = useState("");

  useEffect(() => {
    let path = window.location.pathname;
    let searchTerm = path.split("/")[1];
    setTerm(searchTerm);
  }, [window.location.pathname]);

  return (
    <>
      <h2>Showing results for "{searchTerm}"</h2>
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

export default ShowMovies;
