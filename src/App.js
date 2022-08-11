import "./App.css";
import { React, useState } from "react";
import Form from "./Form";

import { getAll } from "./services/formlist";

//useSelector from Redux
import { useSelector } from "react-redux";

function App() {
  //STATES
  const [createForm, setCreateForm] = useState(false);

  //set state to the useSelector from store wrapped in Provider
  const state = useSelector((state) => state);

  //FUNCTIONS
  //changes createForm to true or false.
  const changeCreateForm = () => {
    const value = !createForm;
    setCreateForm(value);
  };

  //RETURN
  //if createForm is true, show the forms, else hides the form
  //shows the formList with each form name, description, and the list of questions
  return (
    <div className="App">
      {console.log(getAll())}
      <button className="button" onClick={changeCreateForm}>
        + Create a form
      </button>
      {createForm ? <Form changeCreateForm={changeCreateForm} /> : null}
      <ul>
        {state.formList.map((form) => (
          <li key={form.id}>
            <strong>Name: </strong>
            {form.name} <strong>Description: </strong>
            {form.description}
            <ul>
              {form.questions.map((question) => (
                <li key={question.id}>
                  <p>
                    <strong>Question Name: </strong>
                    {question.name}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
