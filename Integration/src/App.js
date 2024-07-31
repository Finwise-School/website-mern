import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainContent from "./components/MainContent";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import Cards from "./components/carouselCards";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/clients" element={<Cards/>} />
        </Routes>
        <Footer />
      </div>
    </Router>

    
  );
};

export default App;
