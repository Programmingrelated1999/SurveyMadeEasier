//Initial State
InitialState = {
  name: "",
  description: "",
  questions: [],
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT":
      const newState = InitialState;
      return newState;
    default:
      return state;
  }
};

export default FormReducer;
