//import React
import React from "react";

//Yes and No radio buttons returned
const AgreeDisagree = () => {
  return (
    <div>
      <input
        type="radio"
        id="html"
        name="question"
        value="YES"
        disabled
      ></input>
      <label htmlFor="html">YES</label>
      <input type="radio" id="html" name="question" value="NO" disabled></input>
      <label htmlFor="html">NO</label>
    </div>
  );
};

export default AgreeDisagree;
