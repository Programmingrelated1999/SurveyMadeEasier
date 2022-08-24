import { React, useState } from "react";
import AgreeDisagree from "./question_types/AgreeDisagree";
import Review from "./question_types/Review";
import MultipleChoice from "./question_types/MultipleChoice";
import Text from "./question_types/Text";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion } from "./reducers/FormReducer";

//QUESTION TYPE
//question is for question.type, questionName is for question.name, questionChoices is for question.choices
const Question = () => {
  const [question, setQuestion] = useState("text");
  const [questionName, setQuestionName] = useState("");
  const [questionChoices, setQuestionChoices] = useState([]);

  //temporary id for rendering the list, does not get stored and transferred to backend.
  let temporary_id_for_rendering = 0;

  //dispatch variable storing useDispatch hook from react-redux which send actions to the the store wrapped
  const dispatch = useDispatch();

  //import all states from the store and set it to questions variable
  const form = useSelector((state) => state.form);

  //on input change change the question name
  const changeQuestionName = (event) => {
    setQuestionName(event.target.value);
  };

  const submitChoices = (choices) => {
    setQuestionChoices(choices);
  };

  //on submit submit question, reset questionName and questionChoices
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createQuestion({
        name: questionName,
        type: question,
        id: temporary_id_for_rendering,
      })
    );
    temporary_id_for_rendering += 1;
    setQuestionName("");
    setQuestionChoices([]);
  };

  //set question type for checking condition in rendering the questions set up
  const handleQuestionType = (event) => {
    setQuestion(event.target.value);
  };

  //RETURN STATEMENT
  //based on the select dropdown, set the question to question type
  //print out the questions created under the form
  //based on the question, render question type components
  return (
    <div className="question">
      <ul>
        {form.questions.map((question) => (
          <li key={question.id}>
            <strong>Name: </strong>
            {question.name} <strong>Question Type: </strong>
            {question.type}
          </li>
        ))}
      </ul>
      Question
      <input
        type="text"
        name="question"
        onChange={changeQuestionName}
        value={questionName}
      />
      <select value={question} onChange={handleQuestionType}>
        <option value="text">Text</option>
        <option value="multiple_choice">Multiple Choice</option>
        <option value="agree_disagree">Agree/Disagree</option>
        <option value="review">Review</option>
      </select>
      {question === "text" ? <Text /> : null}
      {question === "multiple_choice" ? (
        <MultipleChoice
          submitChoices={submitChoices}
          questionChoices={questionChoices}
        />
      ) : null}
      {question === "agree_disagree" ? <AgreeDisagree /> : null}
      {question === "review" ? <Review /> : null}
      <button type="button" onClick={handleSubmit}>
        Add Another Question
      </button>
    </div>
  );
};

//EXPORT
export default Question;
