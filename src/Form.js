import { React, useState } from "react";

const Form = ({ changeCreateForm }) => {
  const [submit, changeSubmit] = useState(true);

  //handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();
    changeCreateForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input type="text" name="name" />
      </label>
      <label>
        Description
        <input type="text" name="description" />
      </label>
      <div>
        <p>ADD A Question</p>
        <label>
          Question
          <input type="text" name="question" />
        </label>
        <button>Add a Question</button>
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
