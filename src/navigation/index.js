import React from "react";
import App from "../App";
import Details from "../components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/details" element={<Details />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
