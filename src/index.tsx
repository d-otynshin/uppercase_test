import React from "react";
import ReactDOM, { Container } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as Container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
