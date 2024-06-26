import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import noImage from "../assets/no-image.png";

function SearchResults({ movie, setQuery }) {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleNagivation = () => {
    setQuery("");
    navigate(`/movie/details/${movie.id}`);
  };
  return (
    <div className="search-results-item" onClick={handleNagivation}>
      <img
        className="result-img"
        src={
          imageError
            ? noImage
            : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        }
        onError={() => setImageError(true)}
      />
      <p>{movie.title}</p>
    </div>
  );
}

export default SearchResults;
