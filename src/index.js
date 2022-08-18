import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import createStore, Provider and Reducers
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import FormReducer from "./reducers/FormReducer";
import FormListReducer from "./reducers/FormListReducer";

//createFormList for adding formList for the initial state of the formList from backend
import { createFormList } from "./reducers/FormListReducer";

//for initializing getAll
import { getAll } from "./services/formlist";

//combineReducers
const reducer = combineReducers({
  form: FormReducer,
  formList: FormListReducer,
});

//create a store from the Form Reducer
const store = createStore(reducer);

//getAll gets the JSON of the GET method. For each item forms in the array, store it in initial states using dispatch method and calling createFormList
getAll().then((forms) => {
  forms.forEach((form) => {
    console.log(form.questions);
    store.dispatch(
      createFormList({
        name: form.name,
        description: form.description,
        questions: form.questions,
      })
    );
  });
});

//create a Provider component which pass the store to the children component which is the APP
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
