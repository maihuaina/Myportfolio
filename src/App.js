import React, { useState, useCallback } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  

  return (
    <div className="container m-auto">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
