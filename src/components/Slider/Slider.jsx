import React, { useEffect, useState } from "react";
import axios from "axios";
// import { upcoming } from "../../temp/upcoming";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Ratings from "../Ratings/Ratings";
import Genres from "../Genres/Genres";
import "./Slider.css";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    // get API DATA
    axios(
      `${import.meta.env.VITE_APP_BASE_URL}/upcoming?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=1`
    )
      .then((response) => {
        console.log(response.data.results);
        setUpcoming(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const sliderStyles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${upcoming[slideIndex]?.backdrop_path})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
    width: "100%",
    position: "relative",
  };

  const slideForward = () => {
    if (slideIndex === upcoming.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const slideBackward = () => {
    if (slideIndex === 0) {
      setSlideIndex(upcoming.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div style={sliderStyles} className="slider-container">
      <div className="slider-overlay"></div>
      <MdKeyboardArrowLeft className="arrow-left" onClick={slideBackward} />
      <MdKeyboardArrowRight className="arrow-right" onClick={slideForward} />
      <div className="slider-info">
        <h2>{upcoming[slideIndex]?.title}</h2>
        <p>
          {upcoming[slideIndex]?.overview?.slice(0, 130)}
          {upcoming[slideIndex]?.overview?.length > 130 ? "..." : null}
        </p>
        <Genres genreIds={upcoming[slideIndex]?.genre_ids} />
        <p>Release Date: {upcoming[slideIndex]?.release_date}</p>
        {/* <Ratings numberRating={upcoming[slideIndex]?.vote_average} /> */}
      </div>
    </div>
  );
}

export default Slider;
