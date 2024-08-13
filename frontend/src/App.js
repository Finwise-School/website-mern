import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/Login/AuthContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./components/carouselCards";
import Profile from "./components/Profile";
import MainContent from "./components/MainContent";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import AboutUS from "./components/AboutUs";
import LoginPage from "./components/Login/login";
import SignupPage from "./components/Login/SignupPage";


const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
        <AuthProvider>
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/aboutUs" element={<AboutUS/>}/>
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/clients" element={<Cards/>} />
          <Route
              path="/profile"
              element={<ProtectedRoute element={<Profile />} />}
            />
        </Routes>
        <Footer />
      </div>
    </Router>
        </AuthProvider>
  );
};

export default App;
