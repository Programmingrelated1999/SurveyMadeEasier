import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import createStore, Provider and Reducers
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import FormReducer from "./reducers/FormReducer";
import FormListReducer from "./reducers/FormListReducer";

const reducer = combineReducers({
  form: FormReducer,
  formList: FormListReducer,
});

//create a store from the Form Reducer
const store = createStore(reducer);

//create a Provider component which pass the store to the children component which is the APP
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
