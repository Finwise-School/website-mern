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
import AboutUs from "./components/Abouts/AboutUs";
import LoginPage from "./components/Login/login";
import SignupPage from "./components/Login/SignupPage";
import Fire from "./components/calculator/Fire";
import GoalSIP from "./components/calculator/GoalSIP";
import MutualFunds from "./components/calculator/MutualFunds";
import FixedDepo from "./components/calculator/FixedDepo";


const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header/>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/clients" element={<Cards />} />
            <Route path="/calculator/fire" element={<Fire />} />
            <Route path="/calculator/goal-sip" element={<GoalSIP />} />
            <Route path="/calculator/mutual-funds" element={<MutualFunds />} />
            <Route path="/calculator/fixed-depo" element={<FixedDepo />} />
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
