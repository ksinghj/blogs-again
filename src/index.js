import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(
  reducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
