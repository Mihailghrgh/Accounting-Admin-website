import React from "react";
import ReactDOM from "react-dom/client";
import AccountingAdminTemplate from "./page"; // Import your main component
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AccountingAdminTemplate />
  </React.StrictMode>
);
