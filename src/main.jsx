import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import StarWars from "./StarWars";
import PropTypes from "prop-types";

if (import.meta.env.PROD) {
  StarWars.propTypes = {
    title: PropTypes.string,
    widgetid: PropTypes.string,
  };

  customElements.define(
    "react-starwars",
    reactToWebComponent(StarWars, React, ReactDOM)
  );
} else {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
