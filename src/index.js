import React from "react";
import { render } from "react-dom";
import App from "./App";
import reducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
let store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
