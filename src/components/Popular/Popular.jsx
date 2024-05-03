import React from "react";
import "./Popular.css";
import { popularData } from "../../temp/popular";
import MovieCard from "../MovieCard/MovieCard";

function Popular() {
  return (
    <div>
      <h3>Popular Movies</h3>
      <div className="popular-movies-wrapper">
        {popularData.map((movie) => (
          <MovieCard
            height={"300px"}
            width={"200px"}
            borderRadius={"16px"}
            imgSrc={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
