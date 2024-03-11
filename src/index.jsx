"use strict";
import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter.jsx";
import "./styles.css";

const mainEl = document.querySelector("main");
const root = ReactDOM.createRoot(mainEl);

const INITIAL_VALUE = 123;

root.render(<Counter initialValue={INITIAL_VALUE} />);
