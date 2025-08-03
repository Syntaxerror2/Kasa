import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import React, { useState, useEffect } from 'react';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import About from "../src/pages/About";
import "./styles/App.scss";
import Gallery from "./pages/Gallery";
import logo from "./assets/LOGO.svg";

function App() {
   const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Durée du "faux" chargement

    return () => clearTimeout(timer);
  }, [location.pathname]); // Se déclenche à chaque changement de route

  if (isLoading) {
    return <div>
      <div className="spinner"></div>
       <img src={logo} className="spinner__logo"></img>
    </div>; // 
  
  }

  return (
    <div className="app-container">
      <main className="page__container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appartements/:id" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
