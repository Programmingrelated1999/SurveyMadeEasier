import React from "react";

//Yes and No radio buttons returned
const AgreeDisagree = () => {
  return (
    <div>
      <input type="radio" id="html" name="question" value="YES"></input>
      <label htmlFor="html">YES</label>
      <input type="radio" id="html" name="question" value="NO"></input>
      <label htmlFor="html">NO</label>
    </div>
  );
};

export default AgreeDisagree;
