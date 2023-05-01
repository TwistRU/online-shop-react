import React from 'react';
import './App.scss';
import {HomePage} from "./pages/HomePage/HomePage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {CatalogPage} from "./pages/CatalogPage/CatalogPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
