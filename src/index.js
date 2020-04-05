import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

// TODO: Add instructions, thunk and applyMiddleware

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
