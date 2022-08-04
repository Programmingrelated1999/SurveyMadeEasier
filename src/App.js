import "./App.css";
import { React, useState } from "react";
import Form from "./Form";

function App() {
  //STATES
  const [createForm, setCreateForm] = useState(false);

  //FUNCTIONS
  //changes createForm to true or false.
  const changeCreateForm = () => {
    const value = !createForm;
    setCreateForm(value);
  };

  //RETURN
  return (
    <div className="App">
      <button onClick={changeCreateForm}>+ Create a form</button>
      {createForm ? <Form changeCreateForm={changeCreateForm} /> : null}
    </div>
  );
}

export default App;
