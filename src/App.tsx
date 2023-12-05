import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import SecondPage from "./AboutPage";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<SecondPage />} />
          </Routes>
      </Router>
  );
}

export default App;