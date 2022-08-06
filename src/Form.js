import { React } from "react";
import Question from "./Question";

const Form = ({ changeCreateForm }) => {
  //FUNCTIONS
  //handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();
    changeCreateForm();
  };

  //RETURN
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
      <Question />
      <button type="submit">Submit</button>
    </form>
  );
};

//EXPORT
export default Form;
