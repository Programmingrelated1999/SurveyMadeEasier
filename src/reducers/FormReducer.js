//Initial States
const initialState = {
  name: "",
  description: "",
  questions: [],
};

//Form Reducers - if action is SUBMIT, reset the current state to initial state.
const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const newState = initialState.concat(action.data);
      return newState;
    default:
      return state;
  }
};

//EXPORT
export default FormReducer;
