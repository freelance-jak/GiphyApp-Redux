import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./reducers/index";
import "./css/style.css";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
