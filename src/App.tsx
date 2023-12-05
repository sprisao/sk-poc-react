// src/App.tsx
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import SecondPage from "./SecondPage";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/second" element={<SecondPage />} />
          </Routes>
      </Router>
  );
}

export default App;