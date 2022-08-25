import React, { useState } from "react";

//Multiple Choice with checkboxes of choices
const MultipleChoice = ({ questionChoices, addChoice }) => {
  const [length, setLength] = useState(questionChoices.length);
  const [choice, setChoice] = useState("");

  //change the choice whenever there is a change in user input on the text
  const changeChoice = (event) => {
    event.preventDefault();
    setChoice(event.target.value);
  };

  //event prevent default here prevents html default of submitting after a button clicked
  const handleAddChoice = (event) => {
    event.preventDefault();
    const newLength = length + 1;
    setLength(newLength);
    addChoice(choice);
    setChoice("");
  };

  //renders the questions with the index key starting from 1
  //ask to fill in the multiple choice name and have the option to add the question
  return (
    <div>
      <ul>
        {questionChoices.map((question, index) => (
          <li key={index}>
            <input type="checkbox" disabled />
            {question}
          </li>
        ))}
      </ul>
      <input type="checkbox" name="pets" value="Choice A" disabled />
      <input type="text" value={choice} onChange={changeChoice} />{" "}
      <button onClick={handleAddChoice}> Add choice</button>
      <br />
    </div>
  );
};

//export
export default MultipleChoice;
