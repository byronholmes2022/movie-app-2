import React, { useState } from "react";
import { upcoming } from "../../temp/upcoming";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Slider.css";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderStyles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${upcoming[slideIndex].backdrop_path})`,
    backgroundPosition: "center center",
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
    </div>
  );
}

export default Slider;
