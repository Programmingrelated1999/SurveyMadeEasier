import { React, useState, useEffect } from "react";
import AgreeDisagree from "./question_types/AgreeDisagree";
import Review from "./question_types/Review";
import MultipleChoice from "./question_types/MultipleChoice";
import Text from "./question_types/Text";

//QUESTION TYPE
const Question = () => {
  const [question, setQuestion] = useState("text");
  const [multipleChoice, setMultipleChoice] = useState(false);
  const [review, setReview] = useState(false);
  const [agreeDisagree, setAgreeDisagree] = useState(false);
  const [text, setText] = useState(false);

  //every time page renders, set the questions based on the question type
  useEffect(() => {
    question === "text" ? setText(true) : setText(false);
    question === "multiple_choice"
      ? setMultipleChoice(true)
      : setMultipleChoice(false);
    question === "review" ? setReview(true) : setReview(false);
    question === "agree_disagree"
      ? setAgreeDisagree(true)
      : setAgreeDisagree(false);
  });

  //on submit change everything back to false
  const handleSubmit = (event) => {
    event.preventDefault();
    setText(false);
    setAgreeDisagree(false);
    setMultipleChoice(false);
    setReview(false);
  };

  //set question type for checking condition in rendering the questions set up
  const handleQuestionType = (event) => {
    setQuestion(event.target.value);
  };

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
      <button type="button" onClick={handleSubmit}>
        Add Another Question
      </button>
      {agreeDisagree && <AgreeDisagree />}
      {multipleChoice && <MultipleChoice />}
      {text && <Text />}
      {review && <Review />}
    </div>
  );
};

export default Question;
