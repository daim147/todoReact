import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
let savedLocal;

const restoreLocal = () => {
  savedLocal = JSON.parse(localStorage.getItem("todos"));
  if (!savedLocal) return;
};
// restoreLocal();
ReactDOM.render(
  <App data={savedLocal ? savedLocal : null} />,
  document.getElementById("root")
);
