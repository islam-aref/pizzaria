import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Flashcards from "./Flashcards";
import Order from "./Order";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Flashcards" element={<Flashcards />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
