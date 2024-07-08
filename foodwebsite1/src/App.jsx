import { useState } from "react";
import Header from "./components/Header/Header";
import Signup from './components/Signuplogin/Signup';
import Home from "./components/Home/Home";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import "./components/footer/Footer.css";
import Category from "./components/card/Category";
import "./styles/App.css";
import { Route, Routes } from 'react-router-dom';
import Hero from "./components/About/Hero";

function App() {
const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {
      showLogin?<Signup setShowLogin={setShowLogin}/>:<></>
      }
     <div id="main">
        <Header setShowLogin={setShowLogin} />
      
        </div>
        <Routes>
        <Route path='/'element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/menu" element={<Category/>} />
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
      <Footer/>
        </>
  );
}

export default App
