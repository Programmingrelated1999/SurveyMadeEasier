//Initial States
const initialState = {
  name: "",
  description: "",
  questions: [],
};

//Form Reducers - if action is SUBMIT, reset the current state to initial state.
const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT":
      const newState = initialState;
      return newState;
    default:
      return state;
  }
};

//EXPORT
export default FormReducer;
