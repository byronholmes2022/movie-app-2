import React, { useEffect, useState } from "react";
import axios from "axios";

function Genres({ parent, genreNames, genreIds }) {
  console.log(genreIds);
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((data) => {
        console.log(data.data.genres);
        setGenreData(data.data.genres);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {genreNames &&
        genreNames.map((genre, index) => (
          <span>
            {genre.name}
            {index === genreNames.length - 1 ? "" : ", "}
          </span>
        ))}
      {genreIds && (
        <div>
          Genres:&nbsp;
          {genreIds.map((genreId, index) => {
            for (let i = 0; i < genreData.length; i++) {
              if (genreData[i].id === genreId) {
                return (
                  <span>
                    {genreData[i].name}
                    {index === genreIds.length - 1 ? "" : ", "}
                  </span>
                );
              }
            }
          })}
        </div>
      )}
    </>
  );
}

export default Genres;
