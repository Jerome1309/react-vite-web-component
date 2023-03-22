// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reactToWebComponent from "react-to-webcomponent";
import StarWars from "./StarWars";
import PropTypes from "prop-types";

StarWars.propTypes = {
  title: PropTypes.string,
  btn: PropTypes.func,
};

customElements.define(
  "react-starwars",
  reactToWebComponent(StarWars, React, ReactDOM)
);
