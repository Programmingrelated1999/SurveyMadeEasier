import React from "react";

const AgreeDisagreeVote = () => {
  return (
    <div>
      <input type="radio" id="html" name="question" value="YES"></input>
      <label htmlFor="html">YES</label>
      <input type="radio" id="html" name="question" value="NO"></input>
      <label htmlFor="html">NO</label>
    </div>
  );
};

export default AgreeDisagreeVote;
