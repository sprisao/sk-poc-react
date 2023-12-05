// src/App.tsx
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import SecondPage from "./SecondPage";
import Navbar from "./Navbar";

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<SecondPage />} />
          </Routes>
      </Router>
  );
}

export default App;