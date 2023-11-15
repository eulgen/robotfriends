import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./containers/App";
import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
reportWebVitals();
