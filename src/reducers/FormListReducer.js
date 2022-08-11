//Initial States
const initialState = [];

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
export const createFormList = ({ name, description, questions, id }) => {
  return {
    type: "NEW_FORMLIST",
    data: {
      name,
      description,
      questions,
      id,
    },
  };
};

export default FormListReducer;
