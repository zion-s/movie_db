import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Api from "../Api";
import "../App.css";
import MovieCard from "./MovieCard";
import RecCard from "./RecCard";

const MovieDetail = () => {
  const API_KEY = "5c428e5d00ae3b57aae4143e8c81c13b";
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  const [detail, setDetail] = useState({});
  const [producers, setProducers] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [recs, setRecs] = useState([]);
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchDetails(id);
    fetchCreditDetails(id);
    fetchRecs(id);
  }, [id]);

  const fetchDetails = (movie_id) => {
    Api.get(`movie/${movie_id}?api_key=${API_KEY}&language=en-US`).then(
      (res) => {
        setDetail(res.data);
      }
    );
  };
  const fetchRecs = (movie_id) => {
    Api.get(
      `movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US`
    ).then((res) => {
      setRecs(res.data.results);
    });
  };
  const fetchCreditDetails = (movie_id) => {
    Api.get(`movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`).then(
      (res) => {
        let directors = res?.data?.crew.filter(
          (crew) => crew.job === "Director"
        );
        setDirectors(directors);
        let producers = res?.data?.crew.filter(
          (crew) => crew.job === "Producer"
        );
        setProducers(producers);
        setCast(res.data.cast);
      }
    );
  };
  return (
    <div className="page_margin">
      <div className="poster_detail">
        <img
          src={IMG_URL + detail.backdrop_path}
          alt={detail.title}
          className="jumbo_poster"
        />
        <div className="text-white d-flex justify-content-between align-items-center px-5 jumbo_details w-100">
          <div>
            <h3>{detail.title}</h3>
            <div>
              <span>{detail.release_date}</span>
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span>
                {detail?.genres
                  ?.map((genre, i) => {
                    return genre.name;
                  })
                  .join(", ")}
              </span>
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span>
                {Math.floor(detail.runtime / 60)}h {detail.runtime % 60}m
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center user_score">
            <div>
              <p className="mb-0 mt-3">User</p>
              <p>Score</p>
            </div>
            <div className="rating">{detail.vote_average * 10}%</div>
          </div>
        </div>
      </div>
      <Row className="mt-5">
        <Col className="col-9">
          <h5>Overview</h5>
          <p>{detail.overview}</p>
          <Row className="mt-5">
            {directors?.map((director, i) => {
              return (
                <Col className="col-3">
                  <h6 className="mb-0 text-bold">{director.name}</h6>
                  <p>Director</p>
                </Col>
              );
            })}
            {producers?.slice(0, 2).map((director, i) => {
              return (
                <Col className="col-3">
                  <h6 className="mb-0 text-bold">{director.name}</h6>
                  <p>Producer</p>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col className="col-3">
          <div>
            <h6 className="mb-0 text-bold">Status</h6>
            <p>{detail.status}</p>
          </div>
          <div>
            <h6 className="mb-0 text-bold">Original Language</h6>
            <p>
              {detail.original_language === "en"
                ? "English"
                : detail.original_language}
            </p>
          </div>
          <div>
            <h6 className="mb-0 text-bold">Budget</h6>
            <p>$ {detail?.budget?.toLocaleString()}</p>
          </div>
          <div>
            <h6 className="mb-0 text-bold">Revenue</h6>
            <p>$ {detail?.revenue?.toLocaleString()}</p>
          </div>
        </Col>
      </Row>
      <h5>Cast</h5>
      <Row className="my-4">
        {cast?.length > 0 &&
          cast.slice(0, 4).map((cast, i) => {
            return (
              <Col className="col-3" key={cast.id}>
                <MovieCard cast={cast} />
              </Col>
            );
          })}
      </Row>
      <h5>Recommendations</h5>
      <Row className="mt-4 d-flex justify-content-between">
        {recs?.length > 0 &&
          recs.slice(0, 3).map((cast, i) => {
            return (
              <Col
                className="col-4"
                style={{ maxWidth: "300px" }}
                key={cast.id}
              >
                <RecCard movie={cast} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default MovieDetail;
