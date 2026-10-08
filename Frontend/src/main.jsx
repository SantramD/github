import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MuleSite from "./MuleSite.jsx";
import "./mule-site.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MuleSite />
    </BrowserRouter>
  </React.StrictMode>,
);
