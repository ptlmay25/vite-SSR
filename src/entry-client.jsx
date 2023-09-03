import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { renderToString } from "react-dom/server";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
