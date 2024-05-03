import React from "react";
import { topData } from "../../temp/top";
import MovieCard from "../MovieCard/MovieCard";

export default function Top() {
  return (
    <div>
      {topData.slice(0, 10).map((movie) => (
        <MovieCard
          height={"100px"}
          width={"200px"}
          borderRadius={"8px"}
          imgSrc={movie.backdrop_path}
        />
      ))}
    </div>
  );
}
