import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
function reducer(state, action) {
  return state;
}
const INITIAL_STATE = {
  counter: 0
};

const store = createStore(reducer, INITIAL_STATE);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
