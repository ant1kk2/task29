"use strict";
import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter.jsx";
import "./styles.css";

const mainEl = document.querySelector("main");
const root = ReactDOM.createRoot(mainEl);

root.render(<Counter />);
