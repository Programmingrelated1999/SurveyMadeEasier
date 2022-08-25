//Initial States
const initialState = {
  name: "",
  description: "",
  questions: [],
};

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
    case "RESET_FORM":
      return initialState;
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

//reset Form which send "reset_form" type and no data which will reset the form
export const resetForm = () => {
  return {
    type: "RESET_FORM",
    data: {},
  };
};

//create Question which takes the name and the type of the question and return the action object with type new question and action data
export const createQuestion = ({ name, type, id, choices }) => {
  return {
    type: "NEW_QUESTION",
    data: {
      name,
      type,
      id,
      choices,
    },
  };
};

//EXPORT
export default FormReducer;
