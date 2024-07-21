import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Book from './components/Book';
import './css/style.css';

const Home = () => (
  <div className="content">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1>Finwise School</h1>
          <p>Static <i className="fa fa-arrow-right" aria-hidden="true"></i> React</p>
          <Link to="/contact" className="btn btn-primary mx-2">
            <i className="fa fa-envelope" aria-hidden="true"></i> &nbsp; Contact Us
          </Link>
          <Link to="/bookacall" className="btn btn-primary mx-2">
            <i className="fa fa-phone" aria-hidden="true"></i> &nbsp; Book a Call
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookacall" element={<Book />} />
      </Routes>
    </Router>
  );
};

export default App;
