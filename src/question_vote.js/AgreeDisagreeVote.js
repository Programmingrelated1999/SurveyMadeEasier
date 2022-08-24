import React from "react";

const AgreeDisagreeVote = ({ changeResult, id }) => {
  const setInput = (event) => {
    changeResult(id, event.target.value);
  };
  return (
    <div>
      <input
        type="radio"
        id="html"
        name="question"
        value="YES"
        onClick={setInput}
      ></input>
      <label htmlFor="html">YES</label>
      <input
        type="radio"
        id="html"
        name="question"
        value="NO"
        onClick={setInput}
      ></input>
      <label htmlFor="html">NO</label>
    </div>
  );
};

export default AgreeDisagreeVote;
