import { React } from "react";
import Question from "./Question";
import { useState } from "react";

//Redux import
import { useDispatch, useSelector } from "react-redux";

//action creators from reducers import
import { createForm, resetForm } from "./reducers/FormReducer";
import { createFormList } from "./reducers/FormListReducer";

const Form = ({ changeCreateForm }) => {
  //states
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const form = useSelector((state) => state.form);

  //dispatch
  const dispatch = useDispatch();

  //changeTitle for input onChange
  const changeTitle = (event) => {
    setFormTitle(event.target.value);
  };

  //changeDescription for input onChange
  const changeDescription = (event) => {
    setFormDescription(event.target.value);
  };

  //FUNCTIONS
  //handleSubmit function, call changeCreateForm which will set createForm value to opposite in App to close the form
  const handleSubmit = (event) => {
    event.preventDefault();
    changeCreateForm();
    dispatch(createForm({ name: formTitle, description: formDescription }));
    dispatch(
      createFormList({
        name: formTitle,
        description: formDescription,
        questions: form.questions,
      })
    );
    dispatch(resetForm());
    setFormTitle("");
    setFormDescription("");
  };

  //RETURN
  //Form ask for title and description of the form
  //Then render the question
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="name"
          onChange={changeTitle}
          value={formTitle}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          onChange={changeDescription}
          value={formDescription}
        />
      </label>
      <Question />
      <button type="submit">Submit</button>
    </form>
  );
};

//EXPORT
export default Form;
