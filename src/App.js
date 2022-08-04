import "./App.css";
import { React, useState } from "react";
import Form from "./Form";

function App() {
  const [createForm, setCreateForm] = useState(false);

  const changeCreateForm = () => {
    const value = !createForm;
    setCreateForm(value);
  };

  return (
    <div className="App">
      <button onClick={changeCreateForm}>+ Creat a form</button>
      {createForm ? <Form changeCreateForm={changeCreateForm} /> : null}
    </div>
  );
}

export default App;
