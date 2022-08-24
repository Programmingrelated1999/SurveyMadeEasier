import React from "react";
import { Rating } from "@mui/material";
import { useState } from "react";

//Material UI review
const ReviewVote = ({ changeResult, id }) => {
  const [reviewHelper, setReviewHelper] = useState(null);
  const setInput = (event) => {
    const value = Number(event.target.value);
    setReviewHelper(value);
    changeResult(id, Number(value));
  };

  const getReviewHelper = () => {
    if (reviewHelper >= 0 && reviewHelper <= 1) {
      return <p>Poor</p>;
    } else if (reviewHelper > 1 && reviewHelper <= 2) {
      return <p>Below average</p>;
    } else if (reviewHelper > 2 && reviewHelper <= 3) {
      return <p>Fair</p>;
    } else if (reviewHelper > 3 && reviewHelper <= 4) {
      return <p>Above average</p>;
    } else {
      return <p>Good</p>;
    }
  };
  return (
    <div>
      <Rating
        name="simple-controlled"
        defaultValue={0}
        precision={0.5}
        onClick={setInput}
      />
      {reviewHelper ? getReviewHelper() : null}
    </div>
  );
};

export default ReviewVote;
