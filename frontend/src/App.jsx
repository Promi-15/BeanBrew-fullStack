import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Lists from "./Pages/Lists";
import Login from "./Pages/Login";
import CreateCoffee from "./Pages/CreateCoffee";
const App = () => {
  return (
    <BrowserRouter
    >
      <Navbar/>
      <Routes>
        <Route path={"/"} element={ <HomePage/>} />
        <Route path={"/lists"} element={ <Lists/>} />
        <Route path={"/login"} element={ <Login/>} />
        <Route path={"/createNewCoffee"} element={ <CreateCoffee/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
