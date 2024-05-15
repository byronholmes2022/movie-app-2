import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({
  height,
  width,
  borderRadius,
  imgSrc,
  movie,
  cardStyle,
}) {
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height,
    width,
    borderRadius,
  };

  return (
    <Link to={`/movie/details/${movie?.id}`} className={cardStyle}>
      <div style={styles}></div>
    </Link>
  );
}
