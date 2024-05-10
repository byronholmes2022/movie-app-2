import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
import Ratings from "../components/Ratings/Ratings";

import "../css/movies.css";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  useEffect(() => {
    // call to get basic movie data
    axios(
      `${import.meta.env.VITE_APP_BASE_URL}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => {
        console.log(response.data);
        setMovieDetail(response.data);
      })
      .catch((err) => console.log(err));

    // call to get trailer
    axios(
      `${import.meta.env.VITE_APP_BASE_URL}/${id}/videos?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => {
        console.log(response.data);

        const filteredTrailers = response.data.results.filter(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );
        setTrailerKey(filteredTrailers[0].key);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="movie-details-container">
      <div className="trailer-container">
        <ReactPlayer
          className="trailer-player"
          url={`https://www.youtube.com/watch?v=${trailerKey}`}
          width="100%"
          height="100%"
        />
      </div>
      <div className="details-container">
        <h1>{movieDetail?.title}</h1>
        <div className="rating">
          {movieDetail?.vote_average && (
            <Ratings numberRating={movieDetail?.vote_average / 2} />
          )}
        </div>
        <div className="info-container">
          <img
            src={`${import.meta.env.VITE_APP_BASE_IMAGE_URL}/${
              movieDetail?.poster_path
            }`}
            alt=""
            className="details-poster"
          />
          <div className="movie-info">
            <h2>{movieDetail?.tagline}</h2>
            <h4>{movieDetail?.overview}</h4>
            <h4>Status: {movieDetail?.status}</h4>
            <h4>Runtime: {movieDetail?.runtime} min</h4>
            <h4>Budget: {movieDetail?.budget}</h4>
            <h4>
              Genres:{" "}
              {movieDetail?.genres.map((genre, index) => (
                <span>
                  {genre.name}
                  {index === movieDetail?.genres.length - 1 ? "" : ", "}
                </span>
              ))}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
