import React from "react";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "./App";

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("Store updated!", store.getState());
});

store.dispatch({
  type: "NOVA_PLACA",
  payload: { id: 2, ambiente: "placa 3", descricao: "placa 3" }
});

store.dispatch({
  type: "NOVA_PLACA",
  payload: { id: 3, ambiente: "placa 4", descricao: "placa 4" }
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
