import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import createStore, Provider and Reducers
import { createStore } from "redux";
import { Provider } from "react-redux";
import FormReducer from "./reducers/FormReducer";

//create a store from the Form Reducer
const store = createStore(FormReducer);

//create a Provider component which pass the store to the children component which is the APP
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
