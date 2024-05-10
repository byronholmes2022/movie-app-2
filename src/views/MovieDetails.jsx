import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player/youtube";

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
    </div>
  );
}

export default MovieDetails;
