import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <BrowserRouter
    >
      <Navbar/>
      <Routes>
        <Route path={"/"} element={ <HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
