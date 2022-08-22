import { React } from "react";

//useSelector from Redux
import { useSelector } from "react-redux";

//getOneForm axios
import { getOneForm } from "../services/formlist";

//Home React Function
const Home = () => {
  const state = useSelector((state) => state);

  const vote = async (event) => {
    const votingForm = await getOneForm(event.target.value);
    console.log(votingForm.questions);
  };

  return (
    <div>
      <ul>
        {state.formList.map((form) => (
          <li key={form.id}>
            <strong>Name: </strong>
            {form.name} <strong>Description: </strong>
            {form.description}
            <button onClick={vote} value={form.id}>
              Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
