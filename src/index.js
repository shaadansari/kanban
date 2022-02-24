import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DataContextProvider } from "./Context";
import App from "./App";

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById("root")
);
