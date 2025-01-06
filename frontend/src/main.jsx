import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Project1 from "./Project1.jsx";
import Project2 from "./Project2.jsx";
import Project3 from "./Project3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fabflix" element={<Project1 />} />
        <Route path="/zotsearch" element={<Project2 />} />
        <Route path="/imanager" element={<Project3 />} />
      </Routes>
    </Router>
  </StrictMode>,
);
