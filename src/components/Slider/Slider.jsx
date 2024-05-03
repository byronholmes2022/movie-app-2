import React, { useState } from "react";
import { upcoming } from "../../temp/upcoming";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Ratings from "../Ratings/Ratings";
import "./Slider.css";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderStyles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${upcoming[slideIndex].backdrop_path})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
    width: "100%",
    position: "relative",
    marginTop: "100px",
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
    <div style={sliderStyles}>
      <div className="slider-overlay"></div>
      <MdKeyboardArrowLeft className="arrow-left" onClick={slideBackward} />
      <MdKeyboardArrowRight className="arrow-right" onClick={slideForward} />
      <div className="slider-info">
        <h2>{upcoming[slideIndex].title}</h2>
        <p>
          {upcoming[slideIndex].overview.slice(0, 130)}
          {upcoming[slideIndex].overview.length > 130 ? "..." : null}
        </p>
        <p>Release Date: {upcoming[slideIndex].release_date}</p>
        <Ratings numberRating={upcoming[slideIndex].vote_average} />
      </div>
    </div>
  );
}

export default Slider;
