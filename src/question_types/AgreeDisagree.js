import React from "react";

const AgreeDisagree = () => {
  return (
    <div>
      <input type="radio" id="html" name="question" value="YES"></input>
      <label for="html">YES</label>
      <input type="radio" id="html" name="question" value="NO"></input>
      <label for="html">NO</label>
    </div>
  );
};

export default AgreeDisagree;
