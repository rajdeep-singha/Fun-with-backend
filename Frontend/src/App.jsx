import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios, { Axios, AxiosError } from "axios";
import { useEffect } from "react";
import Home from "./Component/home";
import Contact from "./Component/contact";
import About from "./Component/About";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import NavBar from "./Component/navbar";
import SignIn from "./Component/SignIn"
import university from "./Component/university"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/university" element={<university />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
