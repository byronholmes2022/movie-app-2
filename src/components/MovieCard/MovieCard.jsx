import React from "react";

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
  return <div style={styles}></div>;
}
