import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./sections/Home";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Services" element={<Services />}></Route>
      <Route path="/Clients" element={<Clients />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
