import React from "react";
import { topData } from "../../temp/top";
import MovieCard from "../MovieCard/MovieCard";
import "./Top.css";

export default function Top() {
  return (
    <div className="top-rated-container">
      <h3>Top Rated</h3>
      <div className="top-rated-wrapper">
        {topData.slice(0, 10).map((movie) => (
          <>
            <MovieCard
              height={"100px"}
              width={"200px"}
              borderRadius={"8px"}
              imgSrc={movie.backdrop_path}
              cardStyle={"top-rated-card"}
            />
            <p>{movie.title}</p>
          </>
        ))}
      </div>
    </div>
  );
}
