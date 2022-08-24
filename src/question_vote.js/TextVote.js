import React from "react";

//Text input
const TextVote = ({ changeResult, id }) => {
  const setInput = (event) => {
    event.preventDefault();
    changeResult(id, event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={setInput}></input>
    </div>
  );
};

export default TextVote;
