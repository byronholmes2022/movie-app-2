import React, { useState } from "react";
import "./Review.css";
import avatar from "../../assets/avatar.png";

function Review({ reviewData }) {
  console.log(reviewData);
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="review">
      <div className="avatar-container">
        <img src={avatar} alt="avatar" className="avatar" />
        <p>{reviewData?.author}</p>
      </div>
      <p className="content">
        {!seeMore && (
          <>
            {reviewData?.content.slice(0, 300)}
            {reviewData?.content.length >= 300 ? "..." : ""}
          </>
        )}
        {seeMore && reviewData?.content}
        {!seeMore && (
          <span className="read-more" onClick={() => setSeeMore(true)}>
            read more
          </span>
        )}
        {seeMore && (
          <span className="read-less" onClick={() => setSeeMore(false)}>
            read less
          </span>
        )}
      </p>
    </div>
  );
}

export default Review;
