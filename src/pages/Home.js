import { React } from "react";

//useSelector from Redux
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      <ul>
        {state.formList.map((form) => (
          <li key={form.id}>
            {console.log(form.id)}
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
};

export default Home;
