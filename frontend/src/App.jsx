import React from "react";
import HomePage from "./landing page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import SignupPage from "./landing page/signup/SignupPage";
import ProductsPage from "./landing page/products/ProductsPage";
import AboutPage from "./landing page/about/AboutPage";
import PricingPage from "./landing page/pricing/PricingPage";
import SupportPage from "./landing page/support/SupportPage";
import Navbar from "./landing page/NavBar";
import Footer from "./landing page/Footer";
import Notfound from "./landing page/Notfound";

const App = () => {
  return (
    <div className=" bg-gray-300 min-h-screen">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<Notfound/>}/>
        </Routes>

        <Footer />

      </BrowserRouter>
      
    </div>
  );
};

export default App;
