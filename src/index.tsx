import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";

import rootReducer from "./reducer";
import { createStore, compose, applyMiddleware } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";

import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

const loggerMiddleware = createLogger();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
