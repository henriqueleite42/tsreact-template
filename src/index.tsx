import Router from "@views/Router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import store from "@redux/store";

import "@config/fontawesome";

import "@style/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
