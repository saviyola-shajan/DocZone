import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Icons from "./Components/Icons";
import PopUp from "./Components/PopUp";
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Icons/>
      <PopUp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;