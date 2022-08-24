import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MultipleChoiceVote from "../question_vote.js/MultipleChoiceVote";
import AgreeDisagreeVote from "../question_vote.js/AgreeDisagreeVote";
import TextVote from "../question_vote.js/TextVote";
import ReviewVote from "../question_vote.js/ReviewVote";

import { getOneForm } from "../services/formlist";

const VoteForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [result, setResult] = useState(null);

  //useEffect to set the form
  useEffect(() => {
    getOneForm(id).then((result) => setForm(result));
  }, []);

  //set a result object with id as key and answer as value
  const changeResult = (id, answer) => {
    const newResult = { ...result };
    newResult[id] = answer;
    setResult(newResult);
  };

  //clearResult
  const handleSubmit = () => {
    const newResult = {};
    setResult(newResult);
    navigate("/home");
  };

  //checking if form exists
  if (form) {
    console.log(form);
  }

  return (
    <div>
      {form ? (
        <div className="form-ready-for-vote">
          <h1>{form.name}</h1>
          <h2>{form.description}</h2>
          {form.questions.map((question) => (
            <div key={question.id}>
              <h5>{question.name}</h5>
              {question.type === "text" ? (
                <TextVote changeResult={changeResult} id={question.id} />
              ) : null}
              {question.type === "review" ? (
                <ReviewVote changeResult={changeResult} id={question.id} />
              ) : null}
              {question.type === "agree_disagree" ? (
                <AgreeDisagreeVote
                  changeResult={changeResult}
                  id={question.id}
                />
              ) : null}
              {question.type === "multiple_choice" ? (
                <MultipleChoiceVote
                  changeResult={changeResult}
                  id={question.id}
                />
              ) : null}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
          {console.log(result)}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

//export
export default VoteForm;
