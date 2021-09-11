import React from "react";
import { useState } from "react";
import BrowseMovies from "./BrowseMovies";
import ShowMovies from "./ShowMovies";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Api from "../Api";

const Homepage = () => {
  const API_KEY = "5c428e5d00ae3b57aae4143e8c81c13b";
  const [searchTerm, setTerm] = useState("");
  const [tab, setTab] = useState(0);

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchAllMovies();
  }, []);
  const fetchAllMovies = () => {
    Api.get(`discover/movie?api_key=${API_KEY}&language=en-US&page=1`).then(
      (res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      }
    );
  };
  const fetchSearchedMovie = (query) => {
    Api.get(`search/movie?api_key=${API_KEY}&query=${query}`).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  };

  useEffect(() => {
    console.log(window.location.pathname.split("/"));
    if (window.location.pathname.split("/")[1] !== "") {
      fetchSearchedMovie(window.location.pathname.split("/")[1]);
      setTab(1);
    } else {
      fetchAllMovies();
    }
  }, []);

  const history = useHistory();
  const routeChange = () => {
    let path = `${searchTerm}`;
    history.push(path);
    fetchSearchedMovie(searchTerm);
  };
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <p className="display-4">Find perfect movie for evening</p>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                value={searchTerm}
                onChange={(e) => setTerm(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => {
                routeChange();
                setTab(1);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {tab === 0 ? (
        <BrowseMovies movies={movies} />
      ) : (
        <ShowMovies searchTerm={searchTerm} movies={movies} />
      )}
    </div>
  );
};

export default Homepage;
