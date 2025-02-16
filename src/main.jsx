import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/style/tailwind.css";
import "./assets/style/index.css";
import "./assets/style/font.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
