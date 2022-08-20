import { React, useState } from "react";
import Form from "../Form";

const CreateForm = () => {
  //STATES
  const [createForm, setCreateForm] = useState(false);

  //FUNCTIONS
  //changes createForm to true or false.
  const changeCreateForm = () => {
    const value = !createForm;
    setCreateForm(value);
  };

  //if createForm is true, show the forms, else hides the form
  //shows the formList with each form name, description, and the list of questions
  return (
    <div className="CreateForm">
      <button className="button" onClick={changeCreateForm}>
        + Create a form
      </button>
      {createForm ? <Form changeCreateForm={changeCreateForm} /> : null}
    </div>
  );
};

export default CreateForm;
