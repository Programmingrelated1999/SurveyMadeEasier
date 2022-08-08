//Initial States
const initialState = {
  name: "",
  description: "",
  questions: [],
};

//RANDOM NUMBER generator for Id needs to be fixed
const generateId = () => Number((Math.random() * 1000000).toFixed(0));

//Form Reducers
//Action type is "New_Questions, append the new question to the state.question array"
const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_FORM":
      return {
        ...state,
        name: action.data.name,
        description: action.data.description,
      };
    case "NEW_QUESTION":
      const newArray = [...state.questions, action.data];
      return { ...state, questions: newArray };
    default:
      return state;
  }
};

//ACTION CREATORS
//create Form which takes the name and the description of the form and return the action object with type new form and action data
export const createForm = ({ name, description }) => {
  return {
    type: "NEW_FORM",
    data: {
      name,
      description,
    },
  };
};
//create Question which takes the name and the type of the question and return the action object with type new question and action data
export const createQuestion = ({ name, type }) => {
  return {
    type: "NEW_QUESTION",
    data: {
      name,
      type,
      id: generateId(),
    },
  };
};

//EXPORT
export default FormReducer;
