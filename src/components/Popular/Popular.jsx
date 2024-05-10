import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Popular.css";
// import { popularData } from "../../temp/popular";
import MovieCard from "../MovieCard/MovieCard";

function Popular() {
  const [popularData, setPopularData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    axios(
      `${import.meta.env.VITE_APP_BASE_URL}/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${pageNumber}`
    )
      .then((response) => {
        console.log(response.data.results);
        setPopularData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [pageNumber]);

  return (
    <div className="popular-container">
      <h3>Popular Movies</h3>
      <div className="popular-movies-wrapper">
        {popularData.map((movie) => (
          <MovieCard
            height={"300px"}
            width={"200px"}
            borderRadius={"16px"}
            imgSrc={movie?.poster_path}
            cardStyle={"popular-card"}
            movie={movie}
          />
        ))}
      </div>
      <div className="page-numbers">
        <p>Select Page</p>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <p
            className={number === pageNumber ? "current-page" : ""}
            onClick={() => setPageNumber(number)}
          >
            {number}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Popular;
