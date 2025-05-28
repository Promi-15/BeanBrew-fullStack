import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Lists from "./Pages/Lists";
const App = () => {
  return (
    <BrowserRouter
    >
      <Navbar/>
      <Routes>
        <Route path={"/"} element={ <HomePage/>} />
        <Route path={"/lists"} element={ <Lists/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
