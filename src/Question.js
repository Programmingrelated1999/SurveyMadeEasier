import { React, useState } from "react";
import AgreeDisagree from "./question_types/AgreeDisagree";
import Review from "./question_types/Review";
import MultipleChoice from "./question_types/MultipleChoice";
import Text from "./question_types/Text";

//QUESTION TYPE
const Question = () => {
  const [question, setQuestion] = useState("text");

  //on submit change everything back to false
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //set question type for checking condition in rendering the questions set up
  const handleQuestionType = (event) => {
    setQuestion(event.target.value);
  };

  //RETURN STATEMENT
  //based on the select dropdown, set the question to question type
  //based on the question, render question type components
  return (
    <div className="question">
      Question
      <input type="text" name="question" />
      <select value={question} onChange={handleQuestionType}>
        <option value="text">Text</option>
        <option value="multiple_choice">Multiple Choice</option>
        <option value="agree_disagree">Agree/Disagree</option>
        <option value="review">Review</option>
      </select>
      {question === "text" ? <Text /> : null}
      {question === "multiple_choice" ? <MultipleChoice /> : null}
      {question === "agree_disagree" ? <AgreeDisagree /> : null}
      {question === "review" ? <Review /> : null}
      <button type="button" onClick={handleSubmit}>
        Add Another Question
      </button>
    </div>
  );
};

export default Question;
