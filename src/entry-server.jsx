import React from "react";
import ReactDOMServer from "react-dom/server";
import { Helmet, HelmetProvider } from "react-helmet-async";
import App from "./App";

export function render() {
  const helmetContext = {};
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
  return { html };
}
