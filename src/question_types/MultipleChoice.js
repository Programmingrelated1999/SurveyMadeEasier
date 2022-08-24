import React, { useState } from "react";

//Multiple Choice with checkboxes of choices
const MultipleChoice = ({ submitChoices }) => {
  //questionChoices to store array of choice and list them, length to store array of lengths, choice to store the current choice being edited.
  const [questionChoices, setQuestionChoices] = useState([]);
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
    const newChoiceList = questionChoices.concat(choice);
    setQuestionChoices(newChoiceList);
    setChoice("");
  };

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

export default MultipleChoice;
