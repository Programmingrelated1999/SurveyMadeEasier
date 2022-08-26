import React from "react";

//Multiple Choice with checkboxes of choices
const MultipleChoiceVote = ({ choices, changeResult, id }) => {
  const setInput = (event) => {
    event.preventDefault();
    changeResult(id, event.target.value);
  };

  return (
    <div>
      {choices.map((choice, index) => (
        <div key={index}>
          <input type="checkbox" value={choice} onClick={setInput} /> {choice}
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceVote;
