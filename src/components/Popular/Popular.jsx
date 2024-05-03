import React from "react";
import "./Popular.css";
import { popularData } from "../../temp/popular";
import MovieCard from "../MovieCard/MovieCard";

function Popular() {
  return (
    <div className="popular-container">
      <h3>Popular Movies</h3>
      <div className="popular-movies-wrapper">
        {popularData.map((movie) => (
          <MovieCard
            height={"300px"}
            width={"200px"}
            borderRadius={"16px"}
            imgSrc={movie.poster_path}
            cardStyle={"popular-card"}
          />
        ))}
      </div>
      <div className="page-numbers">
        <p>Select Page</p>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <p className={number === 1 ? "current-page" : ""}>{number}</p>
        ))}
      </div>
    </div>
  );
}

export default Popular;
