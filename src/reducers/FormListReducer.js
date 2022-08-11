import { getAll } from "../services/formlist";

//Initial States
const initialState = [];

//RANDOM NUMBER generator for Id needs to be fixed
const generateId = () => Number((Math.random() * 1000000).toFixed(0));

//Form Reducers
//Action type is "New_Questions, append the new question to the state.question array"
const FormListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_FORMLIST":
      return [...state, action.data];
    default:
      return state;
  }
};

//ACTION CREATORS
//Action type is "name, description, questions and unique id added to the list"
export const createFormList = ({ name, description, questions }) => {
  return {
    type: "NEW_FORMLIST",
    data: {
      name,
      description,
      questions,
      id: generateId(),
    },
  };
};

export default FormListReducer;
