import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MultipleChoiceVote from "../question_vote.js/MultipleChoiceVote";
import AgreeDisagreeVote from "../question_vote.js/AgreeDisagreeVote";
import TextVote from "../question_vote.js/TextVote";
import ReviewVote from "../question_vote.js/ReviewVote";

import { getOneForm } from "../services/formlist";

const VoteForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [result, setResult] = useState([]);

  useEffect(() => {
    getOneForm(id).then((result) => setForm(result));
  }, []);

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
            <>
              <h5 key={question.id}>{question.name}</h5>
              {question.type === "text" ? <TextVote /> : null}
              {question.type === "review" ? <ReviewVote /> : null}
              {question.type === "agree_disagree" ? (
                <AgreeDisagreeVote />
              ) : null}
              {question.type === "multiple_choice" ? (
                <MultipleChoiceVote />
              ) : null}
            </>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

//export
export default VoteForm;
