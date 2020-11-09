import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./Styles/index.css";
import App from "./App";
import createmiddlewaresaga from "redux-saga";
import * as serviceWorker from "./serviceWorker";
import reducer from "../src/Redux/Reducers/reducer";
import { watchLogin } from "../src/Redux/Sagas/Sagas";

const middleWareSaga = createmiddlewaresaga();
const store = createStore(reducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(watchLogin);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
